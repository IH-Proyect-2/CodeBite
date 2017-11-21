const {ensureLoggedIn} = require("connect-ensure-login");
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

module.exports = {
  EnsureLoggedIn: ensureLoggedIn('../../auth/login'),
  //picture iría relacionado en el formulario de views/user/editUser
  UploadFile: upload.single('picture')
};
