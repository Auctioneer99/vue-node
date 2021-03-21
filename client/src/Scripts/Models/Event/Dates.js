Date.prototype.toShortDate = function() {
  return `${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;
};

class Dates {
  constructor(startdate, c1date, cp1date, finishdate) {
    this.startdate = startdate;
    this.c1date = c1date;
    this.cp1date = cp1date;
    this.finishdate = finishdate;
  }

  toString() {
    let start = this.startdate.toShortDate();
    let end = this.finishdate.toShortDate();
    return `${start} - ${end}`;
  }
}

export default Dates;
