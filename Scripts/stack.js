var stack = function () {
    var data = [];
    return {
        push: function (d) {
            data.push(d);
        },

        pop: function () {
            data.pop();
        },

        list: function () {
            for (var num in data) {
                console.log(data[num]);
            }
        }
    };
};

//First stack object
var objStack1 = stack();
objStack1.push(2);
objStack1.push(3);
objStack1.list();
objStack1.pop();
objStack1.list();

//Second stack object
var objStack2 = stack();
objStack2.push(75);
objStack2.list();