
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Proyectos ESCOM' });
};

exports.teoria_de_conjuntos = function(req, res){
  res.render('matematicas_discretas/teoria_de_conjuntos', { title: 'Proyectos ESCOM' });
};