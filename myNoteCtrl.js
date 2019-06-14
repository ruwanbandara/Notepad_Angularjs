app.controller("myNoteCtrl", function ($scope) {
    $scope.massage =" ";
    $scope.left = function () {
        return 360
        $scope.massage.length;

    };
    $scope.clear = function () {
        $scope.massage =" ";

    };
    $scope.save = function () {
        alert("Note Saved");

    };

});
