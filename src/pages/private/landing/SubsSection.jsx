import React from 'react'
import Questions from '../../../components/Subscription/Question'

function SubsSection() {
  return (
    <div className='mt-20 my-9 lg:p-0 md:p-5 p-0'>
                <div className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-600 mb-6">
  Subscription FAQs
</div>
      <Questions
          title="Can I get my employer to pay for my subscription?"
          Parha="If you're employed as a developer, your employer should be happy to pay for your subscription as part of your training budget. Be sure to ask them first. If they're happy to do so, complete the checkout and then send an email to hi@frontendmentor.io with the company's name and address, and we'll update the invoice."
        />
           <Questions
          title="Why are there credits limits on the monthly subscription?"
          Parha="Due to the downloadable nature of our Pro assets (design files, premium challenges), we need credit limits for monthly subscribers. Otherwise, someone could subscribe for a month, download everything, and immediately cancel. So we need the limits in place so we can function as a business. The limits we've chosen allow a lot of practice on a month-to-month basis. You can download 5x design files for our free challenges, and you can take 2x premium challenges."
        />
           <Questions
          title="Can I get my employer to pay for my subscription?"
          Parha="If you're employed as a developer, your employer should be happy to pay for your subscription as part of your training budget. Be sure to ask them first. If they're happy to do so, complete the checkout and then send an email to hi@frontendmentor.io with the company's name and address, and we'll update the invoice."
        />
           <Questions
          title="Do you offer discounts?"
          Parha="We don't offer any discounts on the Pro subscription beyond the regional discounts that we automatically apply. We have lots of free challenges, so we'd recommend using them. Then, if you feel you'll get value from the Pro subscription, you can upgrade.."
        />
           <Questions
          title="Do you offer refunds?"
          Parha="refund policy within 14-days of starting your first subscription. Fair use means that if you download one or two premium assets (designs, premium challenges) and decide it's not for you, we're happy to process a refund. After all, we want you to be satisfied with your purchase! But if you've downloaded three or more premium assets and then requested a refund, we reserve the right to say no. To request a refund, email hi@frontendmentor.io within 14-days of starting your subscription."
        />
    </div>
  )
}

export default SubsSection
