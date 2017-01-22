from pymongo.errors import OperationFailure
from bson.code import Code

class MapReduceFail(Exception):
    pass

def get_stats(db, org):
    mapper = Code("""
    function() {
      if (this.org===\""""+ org +"""\"){
        emit(this.author, 1);
      }
    }
    """)
    reducer = Code("""
    function (key, values) {
      var total = 0;
      for (var i = 0; i < values.length; i++) {
        total += values[i];
      }
      return total;
    }
    """)
    try:
        results = db.notes.map_reduce(mapper, reducer, "myresults")
        return list(results.find())
    except OperationFailure:
        raise MapReduceFail("Something wrong in the map-reduce\n Map: {}\n Reduce: {}".format(mapper, reducer))
    return results

