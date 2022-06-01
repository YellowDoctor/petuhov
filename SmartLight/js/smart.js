var form = new Vue({
    el: '#Form',
    data: {
        WattsPerHour: '',
        LampPowerWatt: ''
    },
    methods: {
        post: function () {
            axios.post('http://petuhov.cf/SmartLight/php/smart.php', {
                WattsPerHour: this.WattsPerHour,
                LampPowerWatt: this.LampPowerWatt,
                Form: ""
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})

var month = new Vue({
    el: '#app2',
    data: {
        Value: 'Test',
    },
    methods: {
        Mpicker: function () {
            axios.post('http://petuhov.cf/SmartLight/php/smart.php', {
                month_picker: "",
                Value: this.Value
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})