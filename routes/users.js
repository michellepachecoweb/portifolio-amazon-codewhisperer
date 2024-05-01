var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create a login endpoint that accepts user and pasword. Return error 401 if user and pasword are not equals 'michellepachecoweb@gmail.com'
router.post('/login', function(req, res, next) {
  const { user, password } = req.body;

  if (user === 'michellepachecoweb@gmail.com' && password === '123456') {
    res.status(200).json({ 
      token: '598115648412156441554541210',  
      message: 'Login realizado com sucesso!' 
    });
  } else {
    res.status(401).json({ message: 'Usuário sem permissão para acessar.' });
  }
});  

// create an endpoint to allow the user change the password. They will provider thair email and new password
router.post('/change-password', function(req, res, next) {
  const { user, oldPassword, newPassword  } = req.body;

  if (user === 'michellepachecoweb@gmail.com' && oldPassword === '123456') {
    // TODO: alterar o registro do usuário para a senha nova
    res.status(200).json({ 
      token: '654321688978978978979485416515691',
      message: 'Senha alterada com sucesso!' 
    });
  } else {
    res.status(401).json({ message: 'Usuário ou senha inválidos!'});
  }     
}); 

    
module.exports = router;
