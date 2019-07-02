//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.fbAsyncInit = function() {
    FB.init({
        appId            : '895953750764901',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.3'
    });
};

FB.login(function(response) {
    if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
            DataManager.fb_response(response);
            SceneManager.run(Scene_Boot);
    });
    } else {
        console.log('User cancelled login or did not fully authorize.');
        SceneManager.run(Scene_LoginError);
    }
});
