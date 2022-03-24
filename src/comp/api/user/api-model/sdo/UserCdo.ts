class UserCdo {
  tno: string;
  customerGender: string;
  customerBirth: string;
  customerNickname: string;
  customerState: string;

  constructor(
    tno: string,
    customerGender: string,
    customerBirth: string,
    customerNickname: string,
    customerState: string
  ) {
    this.tno = tno;
    this.customerGender = customerGender;
    this.customerBirth = customerBirth;
    this.customerNickname = customerNickname;
    this.customerState = customerState;
  }

  static new(): UserCdo {
    return new UserCdo(
      '', '', '', '', ''
    );
  }
}

export default UserCdo;
