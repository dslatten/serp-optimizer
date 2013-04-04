// Custom binding for animated visibility transitions
// http://knockoutjs.com/documentation/custom-bindings.html
ko.bindingHandlers.slideVisible = {
    update: function(element, valueAccessor, allBindingsAccessor) {
        // First get the latest data that we're bound to
        var value = valueAccessor(), allBindings = allBindingsAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value); 

        // Grab some more data from another binding property
        // 400ms is default duration unless otherwise specified
        var duration = allBindings.slideDuration || 400;

        // Now manipulate the DOM element
        if (valueUnwrapped == true) {
            // Make the element visible
            $(element).slideDown(duration);
        }
        else {
            // Make the element invisible
            $(element).slideUp(duration);
        }
    }
};

function SerpListing() {
    var self = this;

    // Title
    self.titleIn = ko.observable("This is an Example of a Title Tag that is Seventy Characters in Length");
    self.titleCount = ko.computed(function() {
        return self.titleIn().replace(/^\s+|\s+$/g,'').length;
    }, this);

    // URL
    self.urlIn = ko.observable("www.seomofo.com/snippet-optimizer.html");

    // Date
    self.dateIn = ko.observable('');
    self.dateOut = ko.computed(function() {
        if (this.dateIn().replace(/\s/g,'') != '') {
            return this.dateIn() + ' &ndash; ';
        }
        else {
            return '';
        }
    }, this);

    // Description
    self.descriptionIn = ko.observable("Here is an example of what a snippet looks like in Google's SERPs. The content that appears here is usually taken from the Meta Description tag if relevant.");


    // Snippet
    self.snippet = ko.computed(function() {
        return self.dateOut() + self.descriptionIn();
    }, this);

    self.snippetCount = ko.computed(function() {
        return self.snippet().length;
    }, this);


    self.descriptionOut = ko.computed(function() {
        return self.descriptionIn();
    }, this);

    
    // ListingForm visibility
    self.showingListingForm = ko.observable(true);
    self.toggleListingForm = function() {
        if (self.showingListingForm()) {
            self.showingListingForm(false);
        }
        else {
            self.showingListingForm(true);
            self.showingEdit(false);
        }
    };

    // showEdit visibility
    self.showingEdit = ko.observable(false);
    self.showEdit = function() {
        if (self.showingListingForm() == false) {
            self.showingEdit(true);
        }
    };
    self.hideEdit = function() {
        if (self.showingListingForm() == false) {
            self.showingEdit(false);
        }
    };

}

// Overall viewmodel for this screen, along with initial state
function SerpViewModel() {
    var self = this;

//        self.titleLimit = ko.observable(70);
//        self.snippetLimit = ko.observable(156);

    self.listings = ko.observableArray([
        new SerpListing()
    ]);

    self.addListing = function() {
        self.listings.push(new SerpListing());
        // KendoUI datePicker widget has to be reinitialized for each new instance
        $('.mofo_date_picker').last().kendoDatePicker({
            value: '',
            format: 'MMM d, yyyy'
        });
    };

    // http://knockoutjs.com/documentation/foreach-binding.html#note_5_postprocessing_or_animating_the_generated_dom_elements
    self.slideUpListing = function(nodeToRemove) {
        $(nodeToRemove).closest('li.g').slideUp(function() {
            $(nodeToRemove).remove();
        })
    };

    self.deleteListing = function(listing) {
        self.listings.remove(listing);
    };
    
}
ko.applyBindings(new SerpViewModel());