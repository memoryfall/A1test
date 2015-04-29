(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

            } else {

            }
       
            // Add event handler to selector. 
            var selector = document.querySelector("#templateControlObjectSelector");
            selector.addEventListener("change", handleChange, false);

            args.setPromise(WinJS.UI.processAll());

        }
    };

    app.start();

    // Define a Person 'class' with bindable properties.
    var Person = WinJS.Binding.define({
        name: "",
        color: "",
        birthday: "",
        petname: "",
        dessert: ""
    });

    // Declare an array of People objects.
    var people = [
        new Person({ name: "Bob", color: "red", birthday: "2/2/2002", petname: "Spot", dessert: "chocolate cake" }),
        new Person({ name: "Sally", color: "green", birthday: "3/3/2003", petname: "Xena", dessert: "cherry pie" }),
        new Person({ name: "Fred", color: "blue", birthday: "2/2/2002", petname: "Pablo", dessert: "ice cream" }),
    ];

    // Update the displayed data when the selector changes.
    function handleChange(evt) {
        var templateElement = document.querySelector("#templateDiv");
        var renderElement = document.querySelector("#templateControlRenderTarget");
        renderElement.innerHTML = "";

        var selected = evt.target.selectedIndex;
        var templateControl = templateElement.winControl;

        while (selected >= 0) {
            templateElement.winControl.render(people[selected--])
                .done(function (result) {
                    renderElement.appendChild(result);
                });        
        }
    }
})();
