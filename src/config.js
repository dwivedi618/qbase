
CKEDITOR.editorConfig = function (config) {
    config.toolbarGroups = [
        { name: 'clipboard', groups: ['undo', 'clipboard'] },
        { name: 'document', groups: ['document', 'mode', 'doctools'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'paragraph', groups: ['align', 'list', 'indent', 'blocks', 'bidi', 'paragraph'] },
        { name: 'insert', groups: ['insert'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'links', groups: ['links'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
    ];

    config.removeButtons = 'Source,Save,Preview,NewPage,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Button,HiddenField,Textarea,TextField,Radio,Form,Link,Unlink,Checkbox,Anchor,Smiley,Iframe,Flash,About';
};
