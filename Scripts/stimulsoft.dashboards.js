!function(e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=((s)=>Object.assign(s,e(s.Stimulsoft)))(require('./stimulsoft.reports')):'function'==typeof define&&define.amd?define(['./stimulsoft.reports'],(s)=>Object.assign(s,e(s.Stimulsoft))):window.Stimulsoft=e(window.Stimulsoft).Stimulsoft}(function(Stimulsoft){if(Stimulsoft){if(Stimulsoft.__engineVersion&&Stimulsoft.__engineVersion!=='2023.2.6')console.warn('Scripts versions mismatch: engine ver. = %s; dashboards ver. = 2023.2.6', Stimulsoft.__engineVersion);else if(Stimulsoft.__reportsVersion!=='2023.2.6')console.warn('Scripts versions mismatch: reports ver. = %s; dashboards ver. = 2023.2.6', Stimulsoft.__reportsVersion);}return typeof StiOptions!=='undefined'?{Stimulsoft,StiOptions}:{Stimulsoft};});