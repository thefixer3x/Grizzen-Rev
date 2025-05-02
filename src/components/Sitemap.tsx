import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      name: 'Home',
      path: '/',
      children: [
        {
          name: 'Features',
          path: '/#features',
          description: 'Smart sales tracking, inventory management, and professional invoicing'
        },
        {
          name: 'Impact',
          path: '/#impact',
          description: 'Our reach across African businesses'
        },
        {
          name: 'Our Vision',
          path: '/#presentation',
          description: 'Vision for African business transformation'
        },
        {
          name: 'Team',
          path: '/#team',
          description: 'Meet our leadership team'
        },
        {
          name: 'Contact',
          path: '/#contact',
          description: 'Get started with Grizzen.Solutions'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-primary">Site Map</h2>
      <div className="space-y-6">
        {siteStructure.map((item) => (
          <div key={item.path}>
            <a href={item.path} className="text-xl font-bold text-primary hover:text-primary-orange">
              {item.name}
            </a>
            <div className="mt-4 grid gap-4">
              {item.children?.map((child) => (
                <a
                  key={child.path}
                  href={child.path}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-primary-orange mt-1" />
                  <div className="ml-4">
                    <div className="font-medium text-primary">{child.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{child.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;