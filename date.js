exports.newdate = function(){
  const date = new Date();
  const options={
  weekday : "long",
  year:"numeric",
  day:"numeric"
}
  return date.toLocaleDateString("en-US", options);

}
