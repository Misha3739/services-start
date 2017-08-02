/**
 * Created by M.Udot on 02.08.2017.
 */
export class AccountService
{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string)
  {
    this.accounts.push({name: name, status: status});
  }

  updateAccount(id: number, status: string)
  {
    this.accounts[id].status = status;
  }
}
