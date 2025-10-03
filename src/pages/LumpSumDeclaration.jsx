import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LumpSumDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Lump Sum Income Tax using E-Tax",
      content: [
        {
          type: "paragraph",
          text: "Lump Sum regime Income Tax can be declared using E-Tax or M-Declaration. If the taxpayer is registered for other domestic tax types as well as Income Tax, then Lump Sum regime must be declared using E-Tax, instead of M-Declaration."
        },
        {
          type: "paragraph",
          text: "The declaration process for Lump Sum regime using E-Tax is similar to other domestic taxes, see page 97 for details."
        },
        {
          type: "paragraph",
          text: "Firstly, if the taxpayer has had any tax withheld and paid on their behalf during the tax period, they must download the Lump Sum annexures from the E-Tax website, see page 97 for more details on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same."
        },
        {
          type: "paragraph",
          text: "If the taxpayer has not had any tax withheld and paid on their behalf during the tax period, they can continue straight to the Lump Sum declaration, see page 154."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "The Lump Sum regime annexure has two tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. See page 99 if there are any problems when validating annexures."
        },
        {
          type: "heading",
          text: "Withholding 5% Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab."
        },
        {
          type: "list",
          items: [
            "Customs Station - Select the customs office of entry. This is listed under the 'Office of Destination' in the top right of the customs declaration.",
            "Customs Declaration (DD COM No) – Enter the unique customs declaration number, for example: 'C39012'. This is listed under the 'Customs Reference' in the top right of the customs declaration.",
            "Customs Declaration Date (dd/mm/yyyy) – Enter the date of the importation, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted. This is listed next to the 'Customs Reference' in the top right of the customs declaration.",
            "Nature of Goods – Enter a brief description of the goods that have been imported. This is listed in the 'Packages and descriptions of goods' section in the middle of the customs declaration.",
            "Origin – Enter the name of the country where the goods or services first came from. This means that if a product first comes from the United Kingdom but arrives via boat to Mombasa - Kenya and lorry through Uganda to the Gatuna border, the origin country is United Kingdom. This is listed under the 'Country of Origin' or 'Cty. orig. Code' in the middle of the customs declaration.",
            "Customs Value (CIF) – Enter the value of the goods or services upon entering East African Community territory (EAC). CIF stands for Cost, Insurance and Freight which means that this value includes the cost of the goods and services from when they originated, but also includes the costs of insurance and freight or transport in getting the goods to EAC first port of entry (Mombasa). This is listed in Rwandan Francs under the 'Statistical Value' in the middle-right of the customs declaration.",
            "5% Withheld in Custom – Enter the tax withheld on the imports. This is equal to the 'W01' Amount in the 'Calculation of Taxes' section in the middle of the customs declaration."
          ]
        },
        {
          type: "heading",
          text: "Withholding Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab."
        },
        {
          type: "list",
          items: [
            "Withholdee's TIN – Enter the TIN of the withholding taxpayer who has withheld and paid tax on behalf of the declaring taxpayer.",
            "Withholdee's Name – Enter the taxpayer name of the withholding taxpayer.",
            "Invoice/Transaction No – Enter the unique invoice number of the transaction that the tax was withheld on.",
            "Date of Withholding (dd/mm/yyyy) – Enter the date of the invoice, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.",
            "Nature of Goods/Services – Enter a brief description of the goods or services on which the tax was withheld.",
            "Amount on Which to Withhold – Enter the amount of the invoice on which withholding was applied, excluding taxes.",
            "Rate Used – Enter the rate of tax that was withheld, without the percentage symbol. For example, withholding tax of 3% should be entered as '3'.",
            "Amount Withheld – Enter the amount of tax that was withheld. This should equal 'Amount on Which to Withhold' multiplied by 'Rate Used'%."
          ]
        },
        {
          type: "heading",
          text: "Lump Sum Declaration"
        },
        {
          type: "paragraph",
          text: "After all applicable Lump Sum annexures (if any) have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Lump Sum declaration, see page 103 for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are the same."
        },
        {
          type: "paragraph",
          text: "The Lump Sum declaration form requires data on:"
        },
        {
          type: "list",
          items: [
            "Business income/sales – Enter the turnover of the business during the tax year including transport income if not declared using the Plate number through M-declaration. Income earned by an agriculturalist or a pastoralist on agricultural or livestock activities: Enter the amount less than 12,000,000 if a taxpayer is operating in this sector.",
            "Quarterly Prepayments – This field is automatically filled with the Instalment Quarterly Prepayments (IQP) that the taxpayer has paid in advance of this declaration.",
            "Withholding on Imports – Enter the amount of WHT 5% that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding 5%' annexure.",
            "Withholding on Public Tenders – Enter the amount of all other types of withholding that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding' annexure."
          ]
        },
        {
          type: "paragraph",
          text: "Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 21"
        },
        {
          type: "paragraph",
          text: "An example Lump Sum regime PIT declaration is entered below. The Income Tax due for this taxpayer in this tax period is FRW 278,500."
        },
        {
          type: "paragraph",
          text: "After saving the Lump Sum regime declaration form, if the taxpayer has not had any tax withheld and paid on their behalf during the tax period, click 'Submit without Annexures' to submit the declaration."
        },
        {
          type: "paragraph",
          text: "If the taxpayer has had tax withheld and paid on their behalf during the tax period, click 'Continue with Upload Annexures'. Upload the annexures and then compare with the declaration form, see page 107 for more detail on uploading annexures and comparing with declaration forms."
        },
        {
          type: "heading",
          text: "Example 22"
        },
        {
          type: "paragraph",
          text: "Continuing the example of the Lump Sum PIT declaration above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted."
        },
        {
          type: "paragraph",
          text: "Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load."
        },
        {
          type: "paragraph",
          text: "Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. See page 436 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines."
        }
      ]
    },
    fr: {
      title: "Déclaration de l'Impôt sur le Revenu Forfaitaire en utilisant E-Tax",
      content: [
        {
          type: "paragraph",
          text: "L'Impôt sur le Revenu au régime Forfaitaire peut être déclaré en utilisant E-Tax ou M-Declaration. Si le contribuable est enregistré pour d'autres types d'impôts nationaux ainsi que l'Impôt sur le Revenu, alors le régime Forfaitaire doit être déclaré en utilisant E-Tax, au lieu de M-Declaration."
        },
        {
          type: "paragraph",
          text: "Le processus de déclaration pour le régime Forfaitaire en utilisant E-Tax est similaire aux autres impôts nationaux, voir page 97 pour plus de détails."
        },
        {
          type: "paragraph",
          text: "Premièrement, si le contribuable a eu des impôts retenus et payés en son nom pendant la période fiscale, il doit télécharger les annexes Forfaitaires du site web E-Tax, voir page 97 pour plus de détails sur le téléchargement des annexes. Le contribuable doit choisir l'annexe PIT ou CIT pertinente, mais les détails requis sont les mêmes."
        },
        {
          type: "paragraph",
          text: "Si le contribuable n'a pas eu d'impôts retenus et payés en son nom pendant la période fiscale, il peut continuer directement à la déclaration Forfaitaire, voir page 154."
        },
        {
          type: "heading",
          text: "Annexes"
        },
        {
          type: "paragraph",
          text: "L'annexe du régime Forfaitaire a deux onglets. Seuls les onglets applicables dans cette période fiscale doivent être complétés, validés et sauvegardés. Voir page 99 s'il y a des problèmes lors de la validation des annexes."
        },
        {
          type: "heading",
          text: "Onglet Retenue 5%"
        },
        {
          type: "paragraph",
          text: "Cet onglet s'applique à tout contribuable qui a payé la retenue d'impôt sur les importations de 5% (WHT 5%) pendant la période fiscale. Cela n'inclut pas d'autres types de retenue d'impôt, qui doivent être déclarés dans l'onglet 'Retenue'."
        },
        {
          type: "list",
          items: [
            "Station des Douanes - Sélectionnez le bureau des douanes d'entrée. Ceci est listé sous 'Bureau de Destination' en haut à droite de la déclaration en douane.",
            "Déclaration en Douane (DD COM No) – Entrez le numéro unique de déclaration en douane, par exemple : 'C39012'. Ceci est listé sous 'Référence Douanière' en haut à droite de la déclaration en douane.",
            "Date de Déclaration en Douane (jj/mm/aaaa) – Entrez la date d'importation, qui doit être entrée au format jj/mm/aaaa tel que le 10 avril 2017 soit entré comme 10/04/2017. Tout autre format de date ne sera pas accepté. Ceci est listé à côté de 'Référence Douanière' en haut à droite de la déclaration en douane.",
            "Nature des Marchandises – Entrez une brève description des marchandises qui ont été importées. Ceci est listé dans la section 'Colis et descriptions des marchandises' au milieu de la déclaration en douane.",
            "Origine – Entrez le nom du pays d'où proviennent les marchandises ou services. Cela signifie que si un produit provient d'abord du Royaume-Uni mais arrive par bateau à Mombasa - Kenya et par camion à travers l'Ouganda jusqu'à la frontière de Gatuna, le pays d'origine est le Royaume-Uni. Ceci est listé sous 'Pays d'Origine' ou 'Code Orig. Pays' au milieu de la déclaration en douane.",
            "Valeur en Douane (CIF) – Entrez la valeur des marchandises ou services lors de l'entrée sur le territoire de la Communauté Est-Africaine (EAC). CIF signifie Coût, Assurance et Fret, ce qui signifie que cette valeur inclut le coût des marchandises et services depuis leur origine, mais inclut aussi les coûts d'assurance et de fret ou transport pour amener les marchandises au premier port d'entrée EAC (Mombasa). Ceci est listé en Francs Rwandais sous 'Valeur Statistique' au milieu-droit de la déclaration en douane.",
            "5% Retenu en Douane – Entrez l'impôt retenu sur les importations. Ceci est égal au Montant 'W01' dans la section 'Calcul des Impôts' au milieu de la déclaration en douane."
          ]
        },
        {
          type: "heading",
          text: "Onglet Retenue"
        },
        {
          type: "paragraph",
          text: "Cet onglet s'applique à tout contribuable qui a eu des impôts retenus et payés en son nom pendant la période fiscale. Cela inclut WHT 15%, WHT 3%, Taxe de Jeu et Taxe de Redevance Minière. Cela n'inclut pas WHT 5% sur les importations qui est inclus dans l'onglet 'Retenue 5%'."
        },
        {
          type: "list",
          items: [
            "TIN du Retenant – Entrez le TIN du contribuable retenant qui a retenu et payé l'impôt au nom du contribuable déclarant.",
            "Nom du Retenant – Entrez le nom du contribuable retenant.",
            "No Facture/Transaction – Entrez le numéro unique de facture de la transaction sur laquelle l'impôt a été retenu.",
            "Date de Retenue (jj/mm/aaaa) – Entrez la date de la facture, qui doit être entrée au format jj/mm/aaaa tel que le 10 avril 2017 soit entré comme 10/04/2017. Tout autre format de date ne sera pas accepté.",
            "Nature des Marchandises/Services – Entrez une brève description des marchandises ou services sur lesquels l'impôt a été retenu.",
            "Montant sur lequel Retenir – Entrez le montant de la facture sur lequel la retenue a été appliquée, taxes exclues.",
            "Taux Utilisé – Entrez le taux d'impôt qui a été retenu, sans le symbole pourcentage. Par exemple, la retenue d'impôt de 3% devrait être entrée comme '3'.",
            "Montant Retenu – Entrez le montant d'impôt qui a été retenu. Ceci devrait égaler 'Montant sur lequel Retenir' multiplié par 'Taux Utilisé'%."
          ]
        },
        {
          type: "heading",
          text: "Déclaration Forfaitaire"
        },
        {
          type: "paragraph",
          text: "Après que toutes les annexes Forfaitaires applicables (si il y en a) ont été complétées, validées et sauvegardées dans le dossier C:/RRA sur la machine locale de l'utilisateur, le contribuable peut retourner à E-Tax pour compléter la déclaration Forfaitaire, voir page 103 pour plus de détails sur la sélection de la déclaration pertinente. Le contribuable doit choisir la déclaration PIT ou CIT pertinente, mais les détails requis sont les mêmes."
        },
        {
          type: "paragraph",
          text: "Le formulaire de déclaration Forfaitaire nécessite des données sur :"
        },
        {
          type: "list",
          items: [
            "Revenus/Ventes d'entreprise – Entrez le chiffre d'affaires de l'entreprise pendant l'année fiscale incluant les revenus de transport si non déclarés en utilisant le numéro de plaque via M-declaration. Revenus gagnés par un agriculteur ou un pasteur sur les activités agricoles ou d'élevage : Entrez le montant inférieur à 12,000,000 si un contribuable opère dans ce secteur.",
            "Paiements Anticipés Trimestriels – Ce champ est automatiquement rempli avec les Paiements Anticipés Trimestriels (IQP) que le contribuable a payés à l'avance de cette déclaration.",
            "Retenue sur Importations – Entrez le montant de WHT 5% qui a été retenu au nom du contribuable. Ceci devrait égaler les valeurs totales combinées dans l'annexe 'Retenue 5%'.",
            "Retenue sur Appels d'Offres Publics – Entrez le montant de tous les autres types de retenue qui ont été retenus au nom du contribuable. Ceci devrait égaler les valeurs totales combinées dans l'annexe 'Retenue'."
          ]
        },
        {
          type: "paragraph",
          text: "Une fois que toutes les cases blanches pertinentes ont été entrées, cliquez sur 'sauvegarder' pour calculer automatiquement les cases grises."
        },
        {
          type: "heading",
          text: "Exemple 21"
        },
        {
          type: "paragraph",
          text: "Un exemple de déclaration PIT du régime Forfaitaire est entré ci-dessous. L'Impôt sur le Revenu dû pour ce contribuable dans cette période fiscale est de 278,500 FRW."
        },
        {
          type: "paragraph",
          text: "Après avoir sauvegardé le formulaire de déclaration du régime Forfaitaire, si le contribuable n'a pas eu d'impôts retenus et payés en son nom pendant la période fiscale, cliquez sur 'Soumettre sans Annexes' pour soumettre la déclaration."
        },
        {
          type: "paragraph",
          text: "Si le contribuable a eu des impôts retenus et payés en son nom pendant la période fiscale, cliquez sur 'Continuer avec Téléchargement Annexes'. Téléchargez les annexes puis comparez avec le formulaire de déclaration, voir page 107 pour plus de détails sur le téléchargement des annexes et la comparaison avec les formulaires de déclaration."
        },
        {
          type: "heading",
          text: "Exemple 22"
        },
        {
          type: "paragraph",
          text: "Continuant l'exemple de la déclaration PIT Forfaitaire ci-dessus, la comparaison entre ce formulaire de déclaration et les annexes téléchargées est montrée ci-dessous. Comme toutes les valeurs de comparaison sont égales, la déclaration peut être certifiée et soumise."
        },
        {
          type: "paragraph",
          text: "Une fois que toutes les annexes et valeurs de déclaration sont égales, correctes et certifiées, cliquez pour 'Soumettre' la déclaration. Après soumission réussie, cet écran se chargera."
        },
        {
          type: "paragraph",
          text: "Cliquez sur 'Voir le Reçu d'Accusé de Réception' pour voir le numéro de référence RRA et le total d'impôt dû qui sont requis pour le paiement. Voir page 436 pour plus de détails sur le paiement des impôts. N'oubliez pas que le paiement doit également être effectué avant la date limite pour éviter les pénalités et les amendes."
        }
      ]
    },
    rw: {
      title: "Gutanga Amakuru y'Umusoro w'Inguzanyo w'Umubare wose ukoresheje E-Tax",
      content: [
        {
          type: "paragraph",
          text: "Umusoro w'Inguzanyo wo mu miterere y'Umubare wose wakoresheje E-Tax cyangwa M-Declaration. Niba umusanzu yanditse ku bindi bice by'umusoro wo mu gihugu hamwe n'Umusoro w'Inguzanyo, noneho umusoro wo mu miterere y'Umubare wose ugomba gutangwa ukoresheje E-Tax, aho M-Declaration."
        },
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru y'umusoro wo mu miterere y'Umubare wose ukoresheje E-Tax ni bwo bwo nk'ibindi bisoro byo mu gihugu, reba ipaji ya 97 ubwinshi."
        },
        {
          type: "paragraph",
          text: "Mbere, niba umusanzu yafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, agomba gukurura ibindi bikurikira by'Umubare wose kuva ku rubuga rwa E-Tax, reba ipaji ya 97 ubwinshi ku gukurura ibindi bikurikira. Umusanzu agomba guhitamo ikindi bikurikira cya PIT cyangwa CIT cyakwiye, ariko amakuru akenera ni amwe."
        },
        {
          type: "paragraph",
          text: "Niba umusanzu atafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, ashobora gukomeza gusa ku gutanga amakuru y'Umubare wose, reba ipaji ya 154."
        },
        {
          type: "heading",
          text: "Ibindi Bikurikira"
        },
        {
          type: "paragraph",
          text: "Ikindi bikurikira cy'umusoro wo mu miterere y'Umubare wose gifite ibice bibiri. Ibice gusa bikwiye mu gihe cy'umusoro cyo ni byo bikenera gukuzuza, gushimangira no kubika. Reba ipaji ya 99 niba hari ibibazo mugihe cyo gushimangira ibindi bikurikira."
        },
        {
          type: "heading",
          text: "Icyiciro cya 5% cy'Umusoro wakururwa"
        },
        {
          type: "paragraph",
          text: "Iki cyiciro gikwiye ku musanzu wese wakishyuye umusoro wakururwa ku bintu binjizwa bya 5% (WHT 5%) mu gihe cy'umusoro. Ibi ntibibamo ibindi bice by'umusoro wakururwa, bikenera gutangwa mu cyiciro cya 'Umusoro wakururwa'."
        },
        {
          type: "list",
          items: [
            "Ikigo cy'Ubusitani - Hitamo ikigo cy'ubusitani cyo kwinjira. Iki ni cyo cyanditswe munsi y' 'Ikigo cy'Intego' mu ruhande rwo hejuru rw'ubusitani rwo gutanga amakuru y'umusoro.",
            "Gutanga Amakuru y'Ubusitani (DD COM No) – Injiza inomero y'ubusitani y'ubusitani yihariye, urugero: 'C39012'. Iki ni cyo cyanditswe munsi y' 'Itegereza ry'Ubusitani' mu ruhande rwo hejuru rw'ubusitani rwo gutanga amakuru y'umusoro.",
            "Itariki yo Gutanga Amakuru y'Ubusitani (jj/mm/aaaa) – Injiza itariki yo kwinjiza, ikenera kwinjirwa mu buryo bwa jj/mm/aaaa nk'uko itariki ya 10 Mata 2017 ikwinjirwa nka 10/04/2017. Icyo ari cyo cyose cy'itariki kitazemera. Iki ni cyo cyanditswe hafi y' 'Itegereza ry'Ubusitani' mu ruhande rwo hejuru rw'ubusitani rwo gutanga amakuru y'umusoro.",
            "Icyerekezo cy'Ubucuruzi – Injiza isobanura rigufi ry'ubucuruzi bwakwinjijwe. Iki ni cyo cyanditswe mu cyiciro cya 'Ibipaki n'ibisobanuro by'ubucuruzi' mu gati y'ubusitani rwo gutanga amakuru y'umusoro.",
            "Inkomoko – Injiza izina ry'igihugu ubucuruzi cyangwa serivisi bwavuyeho bwa mbere. Ibi bivuze ko niba ubucuruzi buva bwa mbere mu Bwongereza ariko bugeze n'ubwato ku Mombasa - Kenya na lori ku Uganda ku mugabane wa Gatuna, igihugu cy'inkomoko ni Bwongereza. Iki ni cyo cyanditswe munsi y' 'Igihugu cy'Inkomoko' cyangwa 'Kode y'Inkomoko' mu gati y'ubusitani rwo gutanga amakuru y'umusoro.",
            "Agaciro k'Ubusitani (CIF) – Injiza agaciro k'ubucuruzi cyangwa serivisi mugihe cyo kwinjira mu gihugu cya Kominiyite y'Uburengerazuba bwa Afurika (EAC). CIF bisobanura Agaciro, Ubwishingizi na Ubwubatsi bivuze ko agaciro aka gashimangira agaciro k'ubucuruzi na serivisi kuva aho byavuye, ariko gashimangira na agaciro k'ubwishingizi na ubwubatsi cyangwa gutwara ubucuruzi mu kugerera ubucuruzi ku mwanya wa mbere wo kwinjira wa EAC (Mombasa). Iki ni cyo cyanditswe mu Franki za Rwanda munsi y' 'Agaciro k'Ubucuruzi' mu gati-iburyo y'ubusitani rwo gutanga amakuru y'umusoro.",
            "5% wakururwa mu Busitani – Injiza umusoro wakururwa ku bintu binjizwa. Iki ni kimwe n'Umubare 'W01' mu cyiciro cya 'Gucunga Amasoro' mu gati y'ubusitani rwo gutanga amakuru y'umusoro."
          ]
        },
        {
          type: "heading",
          text: "Icyiciro cy'Umusoro wakururwa"
        },
        {
          type: "paragraph",
          text: "Iki cyiciro gikwiye ku musanzu wese wafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro. Ibi birimo WHT 15%, WHT 3%, Umusoro w'Umukino na Umusoro w'Ubwishyu bw'Ubwoba. Ibi ntibibamo WHT 5% ku bintu binjizwa bishyirwa mu cyiciro cya 'Umusoro wakururwa 5%'."
        },
        {
          type: "list",
          items: [
            "TIN y'Umusoro wakururwa – Injiza TIN y'umusanzu wakururwa wakuruye kandi wakishyuye umusoro ku bubasha bwa musanzu wo gutanga amakuru.",
            "Izina ry'Umusoro wakururwa – Injiza izina ry'umusanzu wakururwa.",
            "Inomero y'Inyemezabwoba/Ubucuruzi – Injiza inomero y'inyemezabwoba yihariye y'ubucuruzi umusoro wakururwemo.",
            "Itariki yo Kurura (jj/mm/aaaa) – Injiza itariki y'inyemezabwoba, ikenera kwinjirwa mu buryo bwa jj/mm/aaaa nk'uko itariki ya 10 Mata 2017 ikwinjirwa nka 10/04/2017. Icyo ari cyo cyose cy'itariki kitazemera.",
            "Icyerekezo cy'Ubucuruzi/Serivisi – Injiza isobanura rigufi ry'ubucuruzi cyangwa serivisi umusoro wakururwemo.",
            "Umubare wo Kurura – Injiza umubare w'inyemezabwoba umusoro wakururwemo, amasoro atabamo.",
            "Urugero rwakoreshejwe – Injiza urugero rw'umusoro wakururwe, utabamo ikimenyetso cya kimwe cya kimwe. Urugero, umusoro wakururwa wa 3% ukenera kwinjirwa nka '3'.",
            "Umubare wakururwe – Injiza umubare w'umusoro wakururwe. Iki gikenera kuba kimwe n' 'Umubare wo Kurura' wongereye 'Urugero rwakoreshejwe'%."
          ]
        },
        {
          type: "heading",
          text: "Gutanga Amakuru y'Umubare wose"
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose by'Umubare wose bikwiye (niba hari) byakuzuzwe, byashimangiwe kandi byabikijwe mu gushushanya C:/RRA mu mashini y'umukoresha, umusanzu ashobora kugaruka ku E-Tax kugira ngo akuzuze gutanga amakuru y'Umubare wose, reba ipaji ya 103 ubwinshi ku guhitamo amakuru y'uko gutanga akwiye. Umusanzu agomba guhitamo amakuru y'uko gutanga ya PIT cyangwa CIT akwiye, ariko amakuru akenera ni amwe."
        },
        {
          type: "paragraph",
          text: "Ifishi ry'uko gutanga amakuru y'Umubare wose rikenera amakuru ku:"
        },
        {
          type: "list",
          items: [
            "Inguzanyo/Imigabane y'ubucuruzi – Injiza umusaruro w'ubucuruzi mu mwaka w'umusoro harimo na inguzanyo y'ubwubatsi niba itatangwa ukoresheje inomero y'ipeti ku M-declaration. Inguzanyo zahabwa n'umuhinzi cyangwa umworozi ku bucuruzi bwo mu buhinzi cyangwa ubworozi: Injiza umubare munsi ya 12,000,000 niba umusanzu ukora mu cyiciro cyo.",
            "Kwishyura mbere kw'amezi atatu – Iki cyimbo kirazuzwa mu buryo bwikora n'Kwishyura mbere kw'amezi atatu (IQP) umusanzu wakishyuye mbere y'iyi gutanga amakuru.",
            "Umusoro wakururwa ku bintu binjizwa – Injiza umubare wa WHT 5% wakururwe ku bubasha bwa musanzu. Iki gikenera kuba kimwe n'ibintu byose byakurikiranye mu 'Umusoro wakururwa 5%'.",
            "Umusoro wakururwa ku bintu by'ubusitani – Injiza umubare w'ibindi bice byose by'umusoro wakururwe ku bubasha bwa musanzu. Iki gikenera kuba kimwe n'ibintu byose byakurikiranye mu 'Umusoro wakururwa'."
          ]
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose by'umweru byinjiwe, kanda 'bika' kugira ngo ubare ibindi bikurikira by'umweru mu buryo bwikora."
        },
        {
          type: "heading",
          text: "Urugero 21"
        },
        {
          type: "paragraph",
          text: "Urugero rwo gutanga amakuru y'Umubare wose rwa PIT rwinjijwe hepfo. Umusoro w'Inguzanyo wakenera kuri uyu musanzu mu gihe cy'umusoro ni FRW 278,500."
        },
        {
          type: "paragraph",
          text: "Nyuma yo kubika ifishi ry'uko gutanga amakuru y'Umubare wose, niba umusanzu atafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, kanda 'Tanga utabamo ibindi bikurikira' kugira ngo utange amakuru y'uko gutanga."
        },
        {
          type: "paragraph",
          text: "Niba umusanzu afite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, kanda 'Komeza no kohereza ibindi bikurikira'. Kohereza ibindi bikurikira hanyuma gereranya n'ifishi ry'uko gutanga amakuru, reba ipaji ya 107 ubwinshi ku kohereza ibindi bikurikira no kugereranya n'ifishi ry'uko gutanga amakuru."
        },
        {
          type: "heading",
          text: "Urugero 22"
        },
        {
          type: "paragraph",
          text: "Gukomeza urugero rwo gutanga amakuru y'Umubare wose rwa PIT hejuru, kugereranya hagati y'iyi ifishi ry'uko gutanga amakuru n'ibindi bikurikira byakoherejwe birasobanurwa hepfo. Nk'uko ibintu byose byo kugereranya ni byo, amakuru y'uko gutanga ashobora gushimangirwa kandi gutangwa."
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose n'ibintu by'uko gutanga amakuru ni byo, bikwiye kandi byashimangiwe, kanda 'Tanga' amakuru y'uko gutanga. Nyuma yo gutanga neza, iyi shushanyo izakururwa."
        },
        {
          type: "paragraph",
          text: "Kanda 'Reba Icyemezo cy'Ukwemera' kugira ngo urebe inomero y'itegereza ya RRA n'umusoro wose wakenera bikenera kwishyura. Reba ipaji ya 436 ubwinshi ku kwishyura amasoro. Wibuke ko kwishyura bikwiye kandi gukorwa mbere y'umunsi w'urugero kugira ngo utazakira ibihano n'amande."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <h1 className="professional-main-title">{currentContent.title}</h1>
      
      <div className="content-section">
        {currentContent.content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index} className="content-paragraph">{item.text}</p>;
          } else if (item.type === 'heading') {
            return <h2 key={index} className="content-heading">{item.text}</h2>;
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="content-list">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="content-list-item">{listItem}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default LumpSumDeclaration;