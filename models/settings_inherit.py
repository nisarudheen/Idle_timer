from odoo import models, fields ,api


class SettingsInherit(models.TransientModel):
    _inherit = 'res.config.settings'

    time = fields.Integer(string='Idle Timer', config_parameter="res.config.settings.time")






