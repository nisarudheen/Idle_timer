{'name': 'Idel Timer',
 'version': '16.0.1.0.0',
 'sequence': -1,
 'category': 'all',
 'installable': True,
 'application': True,
 'auto_install': False,
 'depends': ['base', 'survey', 'sale'],
 'data':[
  'views/settings_inherit.xml',
  'views/qiuz_inherit.xml'
 ],
'assets':{
     'web.assets_frontend': [
         'idle_timer/static/src/js/survey_extend.js'
     ]
     }
}