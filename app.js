//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'shiftTracker',

    requires: [
        'Ext.MessageBox',
        'Ext.data.identifier.Uuid'
    ],

    models: ["Shift"],
    stores: ["Shifts"],
    controllers: ["Shifts"],

    views: ["ShiftList", "ShiftEditor"],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {

        var shiftListView = {
            xtype: "shiftlistview"
        };

        var shiftEditorView = {
            xtype: "shifteditorview"
        };

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('shiftTracker.view.ShiftList'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
