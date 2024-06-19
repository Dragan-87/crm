class User{

  fistname: string;
  lastname: string;
  birthdate: Date;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;


  constructor(obj?: any) {
    this.fistname = obj.fistname;
    this.lastname = obj.lastname;
    this.birthdate = obj.birthdate;
    this.email = obj.email;
    this.address = obj.address;
    this.city = obj.city;
    this.postalCode = obj.postalCode;
    this.country = obj.country;
  }

}
