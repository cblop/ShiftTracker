Ext.define("ShiftTracker.model.Shift", {
    extend: "Ext.data.Model",
    config: {
        identifier: 'uuid',
        fields: [
            { name: 'id', type: 'string' },
            { name: 'start', type: 'date', dateFormat: 'c' },
            { name: 'end', type: 'date', dateFormat: 'c' },
            { name: 'overtime', type: 'boolean' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'start', message: 'Please enter a start date' },
            { type: 'presence', field: 'end', message: 'Please enter an end date' },
            { type: 'presence', field: 'overtime', message: 'Please choose whether or not this shift is overtime' }
        ]
    }
});
