(function() {
    console.log("stuff");
    var statement = $(".brand");
    var statements = -1;
    console.dir(statement)

    function showNextStatement() {
        var index = statements % statement.length;
        console.log(statement.length)
        ++statements;
        statement.eq(index)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextStatement);
    }

    showNextStatement();

})();
