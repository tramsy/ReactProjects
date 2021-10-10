const sublinks = [
    {
      page: 'products',
      links: [
        { label: 'payment', icon: <i class="far fa-credit-card fa-sm"></i>, url: '/products' },
        { label: 'terminal', icon: <i class="far fa-credit-card fa-sm"></i>, url: '/products' },
        { label: 'connect', icon: <i class="far fa-credit-card fa-sm"></i>, url: '/products' },
      ],
    },
    {
      page: 'developers',
      links: [
        { label: 'plugins', icon: <i class="fas fa-book fa-sm"></i>, url: '/products' },
        { label: 'libraries', icon: <i class="fas fa-book fa-sm"></i>, url: '/products' },
        { label: 'help', icon: <i class="fas fa-book fa-sm"></i>, url: '/products' },
        { label: 'billing', icon: <i class="fas fa-book fa-sm"></i>, url: '/products' },
      ],
    },
    {
      page: 'company',
      links: [
        { label: 'about', icon: <i class="fas fa-briefcase fa-sm"></i>, url: '/products' },
        { label: 'customers', icon: <i class="fas fa-briefcase fa-sm"></i>, url: '/products' },
      ],
    },
  ];
  
  export default sublinks;