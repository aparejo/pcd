import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const blogPosts = {
  'certified-parts': {
    title: 'The Importance of Using Certified Parts for Marine Equipment',
    content: `
      When it comes to maintaining your marine equipment, one of the most critical decisions you can make is choosing certified parts. While it may be tempting to opt for cheaper, non-certified components, doing so can lead to operational risks, legal issues, and higher long-term costs. Here's why using certified parts is essential for the safety and performance of your marine equipment:

      1. Guaranteed Performance
      Certified parts are tested and approved to meet specific industry standards. They are manufactured to the exact specifications required for your equipment, ensuring that they work seamlessly with your marine engine or system. Non-certified parts may not fit properly, leading to poor performance and even damage to other components.

      2. Safety Compliance
      Marine equipment operates in demanding environments, where safety is a top priority. Certified parts comply with safety regulations, reducing the risk of malfunctions that could endanger your crew and vessel. Using non-certified parts can compromise safety and potentially lead to accidents.

      3. Long-Term Cost Savings
      While certified parts may come with a higher price tag upfront, they often save you money in the long run. Certified components are designed for durability and longevity, meaning they are less likely to fail prematurely. Non-certified parts may need to be replaced more frequently, increasing your long-term maintenance costs.

      4. Warranty Protection
      Most marine equipment warranties require the use of certified parts for repairs and replacements. Using non-certified parts can void your warranty, leaving you financially responsible for repairs or replacements that would otherwise be covered.

      5. Legal and Regulatory Compliance
      In many jurisdictions, using certified parts is required by law, especially for commercial vessels. Non-compliance can lead to fines, inspections, and legal repercussions. Certified parts ensure that your vessel meets all regulatory requirements and can continue to operate without legal issues.
    `,
    image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/blog3.webp',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  'sea-water-pumps': {
    title: '5 Common Mistakes in Maintaining Sea Water Pumps (and How to Avoid Them)',
    content: `
      Sea water pumps play a crucial role in keeping marine engines cool and operating efficiently. A malfunctioning pump can lead to overheating, engine damage, and costly repairs. Despite their importance, many boat owners and operators neglect proper maintenance, leading to premature wear and failure. Here are five common mistakes to avoid when maintaining your sea water pump:

      1. Neglecting Regular Inspections
      One of the most common mistakes is failing to inspect your pump regularly. Over time, seals and gaskets can wear down, and debris can accumulate inside the pump, leading to blockages. Regular inspections allow you to catch these issues early before they escalate into bigger problems. It's recommended to check your sea water pump every 50-100 hours of operation or according to the manufacturer's guidelines.

      2. Using Incorrect Parts
      Replacing parts with non-OEM components can save you money upfront, but it may cost you in the long run. Certified parts are designed to fit and function perfectly with your pump, ensuring optimal performance. Using incorrect parts can lead to reduced efficiency, more frequent breakdowns, and voiding of warranties.

      3. Failing to Replace the Impeller
      The impeller is the heart of your sea water pump, and it wears down over time. Many boat owners make the mistake of not replacing the impeller regularly, which can result in pump failure. It's recommended to replace the impeller every 1-2 years, depending on usage. Always keep a spare impeller on board to avoid unexpected downtime.

      4. Not Flushing the Pump After Use
      Sea water contains salt and other corrosive elements that can damage your pump if not flushed out. After every use, especially in saltwater environments, make sure to flush your pump with fresh water to remove salt deposits. This simple step can prolong the life of your pump and reduce the risk of corrosion.

      5. Ignoring Leaks
      Even small leaks can indicate a bigger issue. Whether it's a leak in the pump housing or seals, ignoring it can lead to a complete pump failure. Always address leaks as soon as you notice them to prevent further damage.
    `,
    image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/blog2.webp',
    date: 'March 10, 2024',
    readTime: '6 min read',
  },
  'marine-diesel-engine': {
    title: 'How to Choose the Right Marine Diesel Engine for Your Vessel',
    content: `
      Choosing the right marine diesel engine for your vessel is one of the most critical decisions you'll make. A good engine can improve your vessel's performance, fuel efficiency, and lifespan. Whether you're in the commercial shipping industry or a boat owner, understanding how to choose the right engine can save you time and money in the long run. Here are some key factors to consider when selecting a marine diesel engine:

      1. Horsepower and Engine Size
      Your vessel's size and weight largely dictate the required horsepower. A larger boat will need more horsepower to navigate efficiently. It's essential to match your engine's size with your vessel to ensure optimal performance. Too much horsepower may lead to unnecessary fuel consumption, while too little can strain the engine, reducing its lifespan.

      2. Fuel Efficiency
      Fuel costs are one of the largest operational expenses in the marine industry. Choosing an engine that maximizes fuel efficiency can save you significant costs over the lifespan of the engine. Modern marine diesel engines are designed to be more fuel-efficient while delivering high performance. Look for engines with advanced fuel injection systems that optimize fuel usage and reduce emissions.

      3. Maintenance and Durability
      Maintenance is inevitable for any engine, but some engines are easier to maintain than others. Look for engines with straightforward maintenance requirements and easy access to replaceable parts. Diesel engines are known for their durability and longevity, but regular maintenance is crucial. Consider engines from manufacturers with a reputation for high-quality components and easy servicing.

      4. Environmental Considerations
      With stricter environmental regulations coming into play, selecting an engine that complies with emissions standards is essential. Many modern marine diesel engines come equipped with advanced exhaust systems that reduce the output of harmful gases, making them more environmentally friendly.

      5. Brand and Support
      Finally, the manufacturer's reputation matters. A well-established brand usually offers better customer support, a wider availability of spare parts, and often more reliable engines. Hyundai and Detroit Diesel are examples of reputable manufacturers with a long history of delivering high-performance engines.
    `,
    image: 'https://pcdservicesusa.com/wp-content/uploads/2024/09/blog1.webp',
    date: 'March 5, 2024',
    readTime: '7 min read',
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-navy-900 mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('blog.back')}
          </button>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <time>{post.date.replace('March', t('blog.date.march'))}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime.replace('min read', t('blog.readTime'))}</span>
          </div>

          <h1 className="text-4xl font-bold text-navy-900 mb-8">{t(`blog.posts.${slug}.title`)}</h1>

          <div className="prose prose-lg max-w-none">
            {t(`blog.posts.${slug}.content`).split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}