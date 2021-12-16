var base = module.superModule;

function content(contentValue, renderingTemplate) {
base.call(this,contentValue, renderingTemplate)
this.contentName = contentValue.custom.contentName;
}
module.exports = content;
