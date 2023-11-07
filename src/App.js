// import logo from './logo.svg';
import './App.css';
import Message from './Message.jsx';

let arr = [
  {
    planName: "Free",
    price: 0,
    userStrength: "Single User",
    storage: "5GB Storage",
    upup: "Unlimited Public Projects",
    community: "Community Access",
    specialuprp: [
      {
        name: "Unlimited Private Projects",
        enable:true
      },
      {
        name: "Dedicated Phone Support",
        enable: true
      },
      {
        name: "Free Subdomain",
        enable: true
      },
      {
        name: "Monthly Status Reports",
        enable: true
      }
    ]
},
{
  planName: "Plus",
  price: 9,
  userStrength: "5 Users",
  storage: "50GB Storage",
  upup: "Unlimited Public Projects",
  community: "Community Access",
  specialuprp: [
    {
      name: "Unlimited Private Projects",
      enable:false,
    },
    {
      name: "Dedicated Phone Support",
      enable: false,
    },
    {
      name: "Free Subdomain",
      enable: false,
    },
    {
      name: "Monthly Status Reports",
      enable: true
    }
  ]
},
{
  planName: "Pro",
  price: 49,
  userStrength: "Unlimited Users",
  storage: "150GB Storage",
  upup: "Unlimited Public Projects",
  community: "Community Access",
  specialuprp: [
    {
      name: "Unlimited Private Projects",
      enable:false,
    },
    {
      name: "Dedicated Phone Support",
      enable: false,
    },
    {
      name: "Free Subdomain",
      enable: false
    },
    {
      name: "Monthly Status Reports",
      enable: false
    }
  ]
}
]

function App() {
  return ( 
  <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {    
        arr.map((input) => <Message value={input}></Message>)
        }
      </div>
    </div>
  </section>
)
}

export default App;
