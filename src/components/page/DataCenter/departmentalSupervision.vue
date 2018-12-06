<template>
 <div class="departmentalSupervision">
   <el-tabs type="border-card">
     <el-tab-pane label="市公安局">
       <police></police>
     </el-tab-pane>
     <el-tab-pane label="市市场监管局">
       <market-supervision></market-supervision>
     </el-tab-pane>
     <el-tab-pane label="人行市中心支行">
       <people-bank></people-bank><!--暂定-->
     </el-tab-pane>
     <el-tab-pane label="宁波银监局">
       <banking-supervision></banking-supervision>
     </el-tab-pane>
     <el-tab-pane label="市国税局">
       <national-tax></national-tax>
     </el-tab-pane>
     <el-tab-pane label="市地税局">
       <land-tax></land-tax>
     </el-tab-pane>
     <el-tab-pane label="市人力保障局">
       <manpower-guarantee></manpower-guarantee>
     </el-tab-pane>
     <el-tab-pane label="市中级法院">
       <court></court>
     </el-tab-pane>
     <el-tab-pane label="市网信办">
       <network-information></network-information>
     </el-tab-pane>
     <el-tab-pane label="市维稳办">
       <maintain-stability></maintain-stability>
     </el-tab-pane>
     <el-tab-pane label="市信访办">
       <petition-letter></petition-letter>
     </el-tab-pane>
   </el-tabs>
 </div>
</template>

<script>

/*部门监测*/
  import police from './departmentalSupervision/Police';
  import marketSupervision from './departmentalSupervision/MarketSupervision';
  import peopleBank from './departmentalSupervision/PeopleBank';
  import bankingSupervision from './departmentalSupervision/BankingSupervision';
  import nationalTax from './departmentalSupervision/NationalTax';
  import landTax from './departmentalSupervision/LandTax';
  import manpowerGuarantee from './departmentalSupervision/ManpowerGuarantee';
  import court from './departmentalSupervision/Court';
  import networkInformation from './departmentalSupervision/NetworkInformation';
  import maintainStability from './departmentalSupervision/MaintainStability';
  import petitionLetter from './departmentalSupervision/PetitionLetter';

  export default {
    name: "departmentalSupervision",
    components: {
      police,
      marketSupervision,
      peopleBank,
      bankingSupervision,
      nationalTax,
      landTax,
      manpowerGuarantee,
      court,
      networkInformation,
      maintainStability,
      petitionLetter,
    },
    data (){
      return{

      }
    }


  };
</script>

<style  lang='scss'>
  @import "@/assets/css/page/departmental_supervision.scss";
</style>
