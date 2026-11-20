interface EducationPost { title: string; href: string; }
interface EducationTopic { title: string; posts: readonly EducationPost[]; }
/** Owner-supplied links. This index does not reproduce tax rules or amounts. */
export const taxEducation: readonly EducationTopic[] = [
  {
    title: 'Family taxes', posts: [
      { title: 'Child Tax Credit', href: 'https://www.instagram.com/ehtaxsolutions/reel/Df0OO7eD5Pz/' },
      { title: 'Earned Income Tax Credit', href: 'https://www.instagram.com/ehtaxsolutions/reel/Df73AjKDjSZ/' },
      { title: 'Claiming dependents', href: 'https://www.instagram.com/ehtaxsolutions/reel/DfnKGX4RJkt/' },
    ]
  },
  {
    title: 'Health coverage & retirement', posts: [
      { title: 'Marketplace coverage and Form 1095-A', href: 'https://www.instagram.com/ehtaxsolutions/reel/DfXLhKdR8OC/' },
      { title: 'Saver’s Match', href: 'https://www.instagram.com/ehtaxsolutions/reel/DescpEEt79b/' },
    ]
  },
  {
    title: 'Deductions', posts: [
      { title: 'Business mileage', href: 'https://www.instagram.com/ehtaxsolutions/reel/DfFiMbfRD4v/' },
      { title: 'Standard deduction', href: 'https://www.instagram.com/ehtaxsolutions/reel/Dee1s9kR8xs/' },
    ]
  },
  {
    title: 'Filing & payments', posts: [
      { title: 'Tax filing extensions', href: 'https://www.instagram.com/ehtaxsolutions/reel/DeCRTsPRY2R/' },
      { title: 'Filing when you owe taxes', href: 'https://www.instagram.com/ehtaxsolutions/reel/DeM2SjARmyS/' },
    ]
  },
];
