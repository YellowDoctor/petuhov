function table() {
    axios.post('table.php', {
        Table: ""
    })
        .then(function (response) {
            console.log(response.data);
            var obj = response.data.substring(response.data.indexOf("{"));
            normOBJ = JSON.parse(obj);
            time.timeOt = normOBJ.ot
            time.timeDo = normOBJ.do
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.addEventListener ?
    window.addEventListener("load", table, false)
    :
    window.attachEvent && window.attachEvent("onload", table);

var time = new Vue({
    el: '#app-1',
    data: {
        timeOt: "",
        timeDo: "",
        seen: false
    },
    methods: {
        state: function () {
            this.seen = !this.seen
        }
    }
})

var app0 = new Vue({
    el: '#app-0',
    data: {
        list: [],
        name: '',
        kall: ''
    },
    methods: {
        CN: function () {
            axios.post('table.php', {
                name: this.name
            })
                .then(function (response) {
                    console.log(response.data);
                    var obj = response.data.substring(response.data.indexOf("{"));
                    console.log(obj);
                    normOBJ = JSON.parse(obj);
                    time.timeOt = normOBJ.ot
                    time.timeDo = normOBJ.do
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        refrech: function () {
            var self = this;
            axios.post('table.php', {
                refrech: ''
            })
                .then(function (response) {
                    console.log(response);
                    var obj = response.data.substring(response.data.indexOf("["));
                    normOBJ = JSON.parse(obj);
                    self.list = [];
                    self.list.push(normOBJ);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        Ckall: function() {
            
        }
    }
})

var qwe = new Vue({
    el: '#response',
    data: {
        OT: '',
        DO: ''
    },
    methods: {
        post: function () {
            axios.post('table.php', {
                OT: this.OT,
                DO: this.DO,
                Table: ""
            })
                .then(function (response) {
                    console.log(response.data);
                    var obj = response.data;
                    console.log(obj);
                    var obj = response.data.substring(response.data.indexOf("{"));
                    normOBJ = JSON.parse(obj);
                    time.timeOt = normOBJ.ot
                    time.timeDo = normOBJ.do
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})

var cha = new Vue({
    el: '#cha',
    data: {
        seen2: true
    },
    methods: {
        state2: function () {
            this.seen2 = !this.seen2
        }
    }
})