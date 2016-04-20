(function() {
    var statement = $(".brand");
    var statements = -1;

    function showNextStatement() {
        var index = statements % statement.length;
        ++statements;
        statement.eq(index)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextStatement);
    }
    showNextStatement();

})();
