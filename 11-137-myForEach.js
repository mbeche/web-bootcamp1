function myForEach(arr, func){
  for (i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}

const colors = ["orange","purple","blue","pink"];

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
    func(this[i]);
  }
}
