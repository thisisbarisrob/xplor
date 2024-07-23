custom_init = function() {
  if ($('.ver2').length) {
    // new login page
    $('.wm-user span').text('E-mail address / Courriel');
    $('.wm-pass span').text('Password / Mot de passe');
    $('.session_preview p').html('Use the new Webmail Interface Preview<br/>Utiliser la nouvelle interface Webmail');
    $('.session_expire p').html('Shared computer - log me out after 4 hours<br/>Ordinateur partag&eacute - d&eacuteconnect&eacutee apr&egraves 4 heures');
    $('.session_persist p').html("Keep me logged in until I log out<br/>Restez connect&eacute jusqu'&agrave vous vous en d&eacuteconnecter d&eacuteconnectez");
    $('.formbuttons button').text('Login / Se connecter');
    $('#example-case-sensitive').text('password is case-sensitive / le mot de passe tient compte des majuscules.');
    $('#pwd-title').text('Login Token / Jeton de connexion');
    $('.modalheader center').html('Two-Factor Authentication required / Deux-Factor Authentication required');
    $('#example-2fa-ga').text("Get a token from your authenticator app / Obtenez un token avec votre application d'authentification");
    $('#example-2fa-sms').text("A token has been sent to your mobile device via SMS / Un jeton a &eacutet&eacute envoy&eacute par SMS sur votre appareil mobile");
    $('div.pwrecover a').html('Reset your password / R&eacuteinitialiser votre mot de passe');
  } else {
    // classic login page
    $('.wm-user label').html('E-mail address /<br/> Courriel:');
    $('.wm-pass label').html('Password /<br/> Mot de passe');
    $('.wm-pass p').html('Password is case-sensitive <br/><br/>Le mot de passe tient compte des majuscules.');
    $('.session_preview label').html('Preview /<br/>Aper&ccedilu:');
    $('.session_preview p').html('Log into the new Preview version of Webmail<br/><br/>Utiliser la nouvelle interface Webmail (mode pr&eacutevisualisation)');
    $('.session_expire label').html('Shared computer /<br/> Ordinateur partag&eacute:');
    $('.session_expire p').html('If checked, you will be logged out after 4 hours<br/><br/>Si coch&eacute, votre session sera d&eacuteconnect&eacutee apr&egraves 4 heures');
    $('.session_persist label').html("Stay signed in /<br/> Conserver la session:");
    $('.session_persist p').html("If checked, this browser will log into webmail automatically until you logout<br/><br/>Si coch&eacute, ce navigateur se connectera automatiquement au courriel Web jusqu&#39&agrave ce que vous vous d&eacuteconnectez");
    $('.formbuttons input').val('Login / Se connecter');
    $('#example-case-sensitive').text('Password is case-sensitive / Le mot de passe tient compte des majuscules.');
    $('#pwd-title label').html('Password /<br/> Mot de passe:');
    $('div a').html('Reset your password / R&eacuteinitialiser votre mot de passe');
  } 

  rcmail.add_label('loading','Loading / Chargement ...');
};