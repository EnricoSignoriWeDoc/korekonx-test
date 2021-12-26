<template>
  <HomeSVG v-if="svgToLoad === 'Home'" />
  <PortfolioSVG v-if="svgToLoad === 'Portfolio'" />
  <KoreTeamSVG v-if="svgToLoad === 'KoreTeam'" />
  <KorePartnerSVG v-if="svgToLoad === 'KorePartner'" />
  <ComplianceSVG v-if="svgToLoad === 'Compliance'" />
  <KoreNodeSVG v-if="svgToLoad === 'KoreNode'" />
</template>

<script>
import HomeSVG from './svg/HomeSVG.vue';
import PortfolioSVG from './svg/PortfolioSVG.vue';
import KoreTeamSVG from './svg/KoreTeamSVG.vue';
import KorePartnerSVG from './svg/KorePartnerSVG.vue';
import ComplianceSVG from './svg/ComplianceSVG.vue';
import KoreNodeSVG from './svg/KoreNodeSVG.vue';

export default {
  name: 'SideNavBarItemSVG',
  props: {
    svgToLoad: {
      type: String,
      required: true,
    },
  },
  components: {
    HomeSVG,
    PortfolioSVG,
    KoreTeamSVG,
    KorePartnerSVG,
    ComplianceSVG,
    KoreNodeSVG,
  },
};
</script>

<style></style>
