<!--Creado con Ardora - www.webardora.net
bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
para otros usos contacte con el autor-->
<html lang="es">
<head><meta charset="utf-8" /><title>Gestion de usuarios</title>
<link type="text/css" href="css/ardoraLogin.css" rel="stylesheet"/>
</head><body><div id="cabeceira"><h1>Usuarios</h1><p></p></div>
<div id="dialog"><form id="entraUsu" name="entraUsu" method="post" action="<?php echo $slogin_php_self; ?>" class="formLogin">
<p id="validateTips">Data</p>
<div class="iconForm" title="Nombre usuario/a"><p>U</p></div>
<input type="text" name="slogin_POST_username" id="name" placeholder="Nombre usuario/a" required value="<?php echo $slogin_loginname;?>"/>
<div class="iconForm" title="Contraseña"><p>c</p></div>
<input type="password" name="slogin_POST_password" id="password" placeholder="Contraseña" required value="" class="text ui-widget-content ui-corner-all"/>
<p><input type="submit" name="submit" value="Entrar"></p>
<div id="mensaxe"><?php if ($estado==1){
echo '<div class="iconForm" id="warning_i"><p>a</p></div><div id="warning_m"><p>'.$erroLogin.'</p></div>';} ?>
</div></form></div></body></html>
