import HelloWorld from '@/components/HelloWorld'
import AccountsList from '@/components/accounts/list'
import AccountsView from '@/components/accounts/view'
import AccountsCreate from '@/components/accounts/create'
import AccountsEdit from '@/components/accounts/edit'
import BanksList from '@/components/banks/list'

const routes = [
  {path: '/', name: 'HelloWorld', component: HelloWorld},
  {path: '/contas', component: AccountsList},
  {path: '/contas/novo', component: AccountsCreate},
  {path: '/contas/:id', component: AccountsView},
  {path: '/contas/:id/editar', component: AccountsEdit},
  {path: '/bancos', component: BanksList}
]

export default routes
