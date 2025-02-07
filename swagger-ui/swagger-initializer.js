window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // OAuth 코드 감지 및 처리
  const urlParams = new URLSearchParams(window.location.search);
  console.log("🚀 ~ urlParams:", urlParams)
  const code = urlParams.get('code');
  console.log("🚀 ~ code:", code)
  
  if (code) {
    // OAuth 코드를 토큰으로 저장
    localStorage.setItem('oauth_token', code);
    // 창 닫기
    window.close();
    return;
  }

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
    oauth2RedirectUrl: "https://whatsapp-typescript-axios.vercel.app/oauth2-redirect.html",
    onComplete: function() {
      // OAuth 토큰이 있으면 자동으로 인증
      const token = localStorage.getItem('oauth_token');
      if (token) {
        window.ui.preauthorizeApiKey("oauth2", token);
      }
    }
  });
};