var ViewModel = function () {
    var self = this;
    self.courses = ko.observableArray();
    self.error = ko.observable();
    debugger
    var coursesUri = 'http://localhost:9810/api/courses/';

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllCourses() {
        ajaxHelper(coursesUri, 'POST').done(function (data) {
            debugger
            self.courses(data);
        });
    }

    // Fetch the initial data.
    getAllCourses();
};

ko.applyBindings(new ViewModel());