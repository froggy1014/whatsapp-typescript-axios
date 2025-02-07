window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // Custom plugin to modify token request
  const customPlugin = {
    statePlugins: {
      auth: {
        wrapActions: {
          authorize: (oriAction, system) => (auth) => {
            const authConfigs = system.getConfigs().authConfigs;
            const oauthConfig = authConfigs.find(config => config.type === 'oauth2');
            if (oauthConfig) {
              const tokenRequest = oauthConfig.tokenRequest;
              // Modify the token request to use query parameters
              const params = new URLSearchParams();
              for (const [key, value] of Object.entries(tokenRequest.body)) {
                params.append(key, value);
              }
              tokenRequest.url += `?${params.toString()}`;
              tokenRequest.body = null; // Remove form data
            }
            return oriAction(auth);
          }
        }
      }
    }
  };

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json", 
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      customPlugin
    ],
    layout: "StandaloneLayout",
    oauth2RedirectUrl: "https://whatsapp-typescript-axios.vercel.app/swagger-ui/oauth2-redirect.html",
    requestInterceptor: (req) => {
      const token = localStorage.getItem('access_token'); // or wherever you store the token
      if (token) {
        req.headers['Authorization'] = `OAuth ${token}`;
      }
      return req;
    }
  });
};