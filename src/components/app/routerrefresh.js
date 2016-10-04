export default {
    getUrlVars:function() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi,
                    function(m,key,value) {
                        vars[key] = value;
                    }
                );
                return vars;
    },
    updateActive:function(no) {
                $("#myapp li:eq("+no+")").addClass("active");
                console.log(no+'getData');
            }
}