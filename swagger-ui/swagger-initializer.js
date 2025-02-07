window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

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
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    oauth2RedirectUrl: "https://whatsapp-typescript-axios.vercel.app/oauth2-redirect.html"
  });

  ui.initOAuth({
    clientId: "clientId",
    clientSecret: "clientSecret",
    scopes: ["whatsapp_business_management", "whatsapp_business_messaging", "business_management"],
    useBasicAuthenticationWithAccessCodeGrant: true
  });
};
