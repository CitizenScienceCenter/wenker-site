<i18n>
{
  "en": {
    "section-citizenscience-heading": "Citizen Science",
    "section-citizenscience-text": "As the name implies, the activities of the Citizen Science Center Zurich focus on exploring, supporting, and promoting Citizen Science, a form of public participation in scientific research (where “citizen” denotes a member of the general public, independent from citizenship) that has been around for more than a century.",
    "section-citizenscience-text-2": "Public participation in science is a practice that works across many disciplines and that comes in different flavours and with different names, including community based research, crowd-sourced data collection, community-based monitoring, civic science, and more. What characterizes Citizen Science is the collaboration of professional scientists and citizens, the “active” involvement of both, and the engagement of citizens in potentially all phases of the research process.",
    "section-citizenscience-text-3": "Traditional Citizen Science projects involve members of the public in gathering data (often geo-located) via mobile or sensing technologies, or in analysing existing data via interactive and highly visual web interfaces. In an increasing number of cases the public is also involved in other phases of the research process, including the definition of the research questions, the interpretation of results, and the final dissemination of conclusions.",
    "section-citizenscience-text-4": "In the past two decades, citizen science has gained tremendous popularity both with scientists and the public, and citizen science projects span today a wide range of research topics. The methodology offers scientists the potential to tackle research questions with large datasets gathered by citizens across a wide geographical area. It also allows for a much more dynamic and interactive approach to the formulation of hypotheses, research design, and data analysis. With their volunteer activity, Citizens increase their knowledge and literacy about the topic studied, gain insight into the scientific process and method, and acquire new technological skills and abilities.",
    "section-citizenscience-text-5": "For the benefit of the wider society, outcome of Citizen Science projects include community development and empowerment, change of attitudes and behaviours, and renewed engagement in policy making.",

    "section-sdg-heading": "Citizen Science for the SDGs",
    "section-sdg-text": "The Sustainable Development Goals (SDGs) are a set of global goals developed in 2015 by the 193 UN member states and representatives of civil society. They are part of the UN Agenda 2030, a comprehensive call for action to achieve a better and more sustainable future for all.",
    "section-sdg-text-2": "High quality, timely and accessible data are required to monitor progress towards the goals, and there is a strong consensus that citizen engagement is critical. “The monitoring and accountability framework, spanning from the local to the global levels, must be people ­centred, inclusive, transparent and participatory’ (TAP Network 2015, 1).",
    "section-sdg-text-3": "Through citizen science, people can directly engage with and monitor issues that affect them, bring new perspectives and knowledge into science and decision-making, and ultimately demand or drive change.",

    "section-partnerships-heading": "Partnerships and Collaborations",
    "section-partnerships-openseventeen-subheading": "The Open Seventeen – Coaching for Citizen Science Innovation",
    "section-partnerships-openseventeen-text": "O17 is a challenged-based, online interactive coaching programme to help young global innovators connect and shape good ideas into viable social innovation projects for the 17 UN Sustainable Development Goals (SDGs). O17 supports projects that encourage grassroots public participation and citizen science through the use of open data and crowdsourcing.",
    "section-partnerships-openseventeen-text-2": "The Challenge is a joint initiative with the Citizen Cyberlab at University of Geneva, and the Governance Lab at New York University.",
    "section-partnerships-toolkit-heading": "The SDG Crowdsourcing Toolkit – Crowdsourcing Sustainable Development",
    "section-partnerships-toolkit-text": "The SDG Crowdsourcing Toolkit is an ambitious initiative led by CC-CS, in collaboration with the Citizen Cyberlab in Geneva, and aims at positioning Swiss CS at the core of scientific data taking for the SDGs. It will provide a set of open and flexible tools that feature the functionalities required by the most common CS projects, and that can integrate existing platforms and communities. All tools contribute data to a structured and easily accessible database, that - by making data sharing seamless - will facilitate cross-pollination of projects and initiatives.",
    "section-partnerships-toolkit-text-2": "To know more, please contact the CS Center’s team."
  }
}
</i18n>

<template>
  <div>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">Sign up for our Newsletter</h2>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
            <app-newsletter-signup></app-newsletter-signup>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'What',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
