import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PayeDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring PAYE",
      content: [
        {
          type: "paragraph",
          text: "The process for declaring PAYE is different to the process for declaring other domestic taxes as this tax is declared in the RSSB system called ISHEMA. In this system, a process of declaring PAYE, Pension, Maternity scheme, Medial scheme, and Community Based Health Insurance (CBHI) is using a single declaration at the end of which, a taxpayer gets acknowledgment receipts of each of the contribution and tax above. This because all of them are based on the employee remuneration by employer."
        },
        {
          type: "paragraph",
          text: "The process for declaring PAYE, Pension, Medical, Maternity and CBHI is as follow:"
        },
        {
          type: "list",
          items: [
            "Using any internet browser, go to www.ishema.rssb.rw and input personal phone number then click on login.",
            "Enter Company's TIN and Confirm Company Details: provide company's Tax Identification Number (TIN) and verify the details. Please ensure that the TIN entered is accurate and matches the official records.",
            "Provide Personal Information: provide personal information, including full name, email address, and phone number. Additionally, enter the password you currently use to log in to RRA's e-Tax system.",
            "Note that Steps above are one-time processes during initial registration. For subsequent logins, you will only be required to provide your phone number to access the platform.",
            "Login: To log in, a One-Time Password (OTP) is needed. To generate the OTP, simply dial *876*4044# on the registered phone. Enter the prompted code, and log in Ishema successfully. Enter this code when prompted, and you will be able to log in successfully."
          ]
        },
        {
          type: "paragraph",
          text: "On the first page of the platform, you will have access to various activities, including:"
        },
        {
          type: "list",
          items: [
            "View your company's information: You can review and manage the details of the company, as well as add additional users to the company's account.",
            "Check your compliance status: easily monitor the taxpayer compliance status and track declaration history. This helps to staying informed about the tax obligations and ensure timely filings.",
            "File declarations: The platform allows taxpayer to conveniently file a declaration, making the process efficient and streamlined. A taxpayer can submit tax-related information and document with ease."
          ]
        },
        {
          type: "list",
          items: [
            "If this is your first time using the ISHEMA system, kindly download the provided Excel template file (Unified annexure). Populate the file with your employees' salary details.",
            "Once completed, select 'Choose a file from your computer' and upload the Excel file into the system.",
            "Select the desired month for filing. There are two methods to file a declaration:",
            "Click on the 'File declaration' button and select the desired month for filing.",
            "Alternatively, you can directly click on the specific month from the screen displayed below to proceed with the declaration.",
            "Upon uploading the file, the system will validate provided data. In case of accurate data, the system will display 'success'. Click 'Next' to continue. If any errors are detected in the data, they will be shown on the screen, rectify them by revisiting the Excel file. You will need to correct the errors before re-uploading the file to proceed further.",
            "Review and verify the pre-calculated amounts displayed by the system. These amounts represent the total payment for each scheme. Click 'Next' to confirm and proceed.",
            "Read the message below attentively and ensure that the salary data provided for your employees is true and accurate. If you confirm its accuracy, click 'Confirm' to continue.",
            "You successfully filed a declaration. Print the acknowledgment receipt for your records or click 'View Details' to access additional information about your declaration."
          ]
        },
        {
          type: "paragraph",
          text: "Note that after, declaration, a taxpayer can, immediately or after a given time, proceed with a revision. A revision is initiated by clicking on 'Revision Declaration as is shown in the following image."
        },
        {
          type: "heading",
          text: "Unified Annexures"
        },
        {
          type: "paragraph",
          text: "A unified annexure for PAYE, Pension, Maternity, Medial and CBHI has only one tab for a tax period. It is needed to be completed and uploaded as Excel contrary to the annexure of E-tax that need to be downloaded, validated and saved, then uploaded in E-tax."
        },
        {
          type: "list",
          items: [
            "Family Name: Enter the employee's name.",
            "Another name: Enter the employee's other name.",
            "RSSB Number: Enter the employee's Social Security Number (SSN) from RSSB.",
            "NID or Passport: Enter the employee's National Identity Document (ID) number or employee passport number.",
            "Employee Category:",
            "P = Permanent,",
            "C = Casual,",
            "E = Exempted,",
            "S = Second Employer",
            "Is Employee A Rama Member?",
            "Y = Yes,",
            "N = No",
            "Employee Pays Pension?",
            "Y = Yes,",
            "N = No",
            "Employee Pays Mat Leave?",
            "Y = Yes,",
            "N = No",
            "Employee Pays CBHI?",
            "Y = Yes,",
            "N = No",
            "Basic Salary: Enter the basic salary of the employee in Rwandan francs during the tax period.",
            "Benefit in Kind Transport – If the employee benefits from access to and use of a motor vehicle provided by the employer during the tax period, enter 10% of the taxable income in FRW, excluding other benefits in kind.",
            "Benefit in Kind House – If the employee benefits from accommodation provided by the employer during the tax period, enter 20% of the taxable income in FRW, excluding other benefits in kind.",
            "Benefit in Kind Others – If the employee benefits from any benefits in kind from the employer other than transport or accommodation during the tax period, these are entered at market value in FRW.",
            "Lump sum Transport: Amount Lump sum allowance.",
            "Other Medical Deductions: Fill the amount if any.",
            "Terminal Benefit End Contract: Fill the amount if any.",
            "Retirement Benefits: Fill the amount if any.",
            "Ejo-Heza Contribution: Fill the amount if any.",
            "Other Pension Funds: Fill the amount if any."
          ]
        },
        {
          type: "paragraph",
          text: "The system itself computes all component of tax and contributions based on legal provision. Upon filing in Ishema, the filed information and payment, if made, are automatically sent to E-tax"
        }
      ]
    },
    fr: {
      title: "Déclaration de PAYE",
      content: [
        {
          type: "paragraph",
          text: "Le processus de déclaration de PAYE est différent du processus de déclaration d'autres impôts nationaux car cet impôt est déclaré dans le système RSSB appelé ISHEMA. Dans ce système, un processus de déclaration de PAYE, Pension, régime de Maternité, régime Médical et Assurance Maladie Communautaire (CBHI) utilise une seule déclaration à la fin de laquelle, un contribuable reçoit des reçus d'accusé de réception de chacune des contributions et impôts ci-dessus. Ceci parce que tous sont basés sur la rémunération des employés par l'employeur."
        },
        {
          type: "paragraph",
          text: "Le processus de déclaration de PAYE, Pension, Médical, Maternité et CBHI est le suivant :"
        },
        {
          type: "list",
          items: [
            "En utilisant n'importe quel navigateur internet, allez sur www.ishema.rssb.rw et saisissez le numéro de téléphone personnel puis cliquez sur connexion.",
            "Entrez le TIN de l'Entreprise et Confirmez les Détails de l'Entreprise : fournissez le Numéro d'Identification Fiscale (TIN) de l'entreprise et vérifiez les détails. Veuillez vous assurer que le TIN saisi est exact et correspond aux dossiers officiels.",
            "Fournir les Informations Personnelles : fournir les informations personnelles, y compris le nom complet, l'adresse e-mail et le numéro de téléphone. De plus, entrez le mot de passe que vous utilisez actuellement pour vous connecter au système e-Tax de RRA.",
            "Notez que les étapes ci-dessus sont des processus uniques lors de l'inscription initiale. Pour les connexions suivantes, vous devrez seulement fournir votre numéro de téléphone pour accéder à la plateforme.",
            "Connexion : Pour se connecter, un Mot de Passe à Usage Unique (OTP) est nécessaire. Pour générer l'OTP, composez simplement *876*4044# sur le téléphone enregistré. Entrez le code demandé, et connectez-vous à Ishema avec succès. Entrez ce code quand demandé, et vous pourrez vous connecter avec succès."
          ]
        },
        {
          type: "paragraph",
          text: "Sur la première page de la plateforme, vous aurez accès à diverses activités, y compris :"
        },
        {
          type: "list",
          items: [
            "Voir les informations de votre entreprise : Vous pouvez examiner et gérer les détails de l'entreprise, ainsi qu'ajouter des utilisateurs supplémentaires au compte de l'entreprise.",
            "Vérifier votre statut de conformité : surveillez facilement le statut de conformité du contribuable et suivez l'historique des déclarations. Cela aide à rester informé des obligations fiscales et à assurer des dépôts en temps voulu.",
            "Déposer des déclarations : La plateforme permet au contribuable de déposer commodément une déclaration, rendant le processus efficace et rationalisé. Un contribuable peut soumettre des informations et documents liés aux impôts avec facilité."
          ]
        },
        {
          type: "list",
          items: [
            "Si c'est votre première fois d'utiliser le système ISHEMA, veuillez télécharger le fichier modèle Excel fourni (annexe unifiée). Remplissez le fichier avec les détails de salaire de vos employés.",
            "Une fois terminé, sélectionnez 'Choisir un fichier depuis votre ordinateur' et téléchargez le fichier Excel dans le système.",
            "Sélectionnez le mois désiré pour le dépôt. Il y a deux méthodes pour déposer une déclaration :",
            "Cliquez sur le bouton 'Déposer déclaration' et sélectionnez le mois désiré pour le dépôt.",
            "Alternativement, vous pouvez directement cliquer sur le mois spécifique de l'écran affiché ci-dessous pour procéder à la déclaration.",
            "Lors du téléchargement du fichier, le système validera les données fournies. En cas de données exactes, le système affichera 'succès'. Cliquez 'Suivant' pour continuer. Si des erreurs sont détectées dans les données, elles seront affichées à l'écran, rectifiez-les en revisitant le fichier Excel. Vous devrez corriger les erreurs avant de re-télécharger le fichier pour continuer.",
            "Examinez et vérifiez les montants pré-calculés affichés par le système. Ces montants représentent le paiement total pour chaque régime. Cliquez 'Suivant' pour confirmer et procéder.",
            "Lisez attentivement le message ci-dessous et assurez-vous que les données de salaire fournies pour vos employés sont vraies et exactes. Si vous confirmez leur exactitude, cliquez 'Confirmer' pour continuer.",
            "Vous avez déposé avec succès une déclaration. Imprimez le reçu d'accusé de réception pour vos dossiers ou cliquez 'Voir Détails' pour accéder à des informations supplémentaires sur votre déclaration."
          ]
        },
        {
          type: "paragraph",
          text: "Notez qu'après la déclaration, un contribuable peut, immédiatement ou après un temps donné, procéder à une révision. Une révision est initiée en cliquant sur 'Révision Déclaration' comme montré dans l'image suivante."
        },
        {
          type: "heading",
          text: "Annexes Unifiées"
        },
        {
          type: "paragraph",
          text: "Une annexe unifiée pour PAYE, Pension, Maternité, Médical et CBHI n'a qu'un seul onglet pour une période fiscale. Elle doit être complétée et téléchargée en Excel contrairement à l'annexe d'E-tax qui doit être téléchargée, validée et sauvegardée, puis téléchargée dans E-tax."
        },
        {
          type: "list",
          items: [
            "Nom de Famille : Entrez le nom de l'employé.",
            "Autre nom : Entrez l'autre nom de l'employé.",
            "Numéro RSSB : Entrez le Numéro de Sécurité Sociale (SSN) de l'employé de RSSB.",
            "NID ou Passeport : Entrez le numéro de Document d'Identité Nationale (ID) de l'employé ou le numéro de passeport de l'employé.",
            "Catégorie d'Employé :",
            "P = Permanent,",
            "C = Occasionnel,",
            "E = Exempté,",
            "S = Deuxième Employeur",
            "L'Employé est-il Membre Rama ?",
            "Y = Oui,",
            "N = Non",
            "L'Employé Paie-t-il Pension ?",
            "Y = Oui,",
            "N = Non",
            "L'Employé Paie-t-il Congé Mat ?",
            "Y = Oui,",
            "N = Non",
            "L'Employé Paie-t-il CBHI ?",
            "Y = Oui,",
            "N = Non",
            "Salaire de Base : Entrez le salaire de base de l'employé en francs rwandais pendant la période fiscale.",
            "Avantage en Nature Transport – Si l'employé bénéficie de l'accès et de l'utilisation d'un véhicule motorisé fourni par l'employeur pendant la période fiscale, entrez 10% du revenu imposable en FRW, excluant les autres avantages en nature.",
            "Avantage en Nature Maison – Si l'employé bénéficie d'un logement fourni par l'employeur pendant la période fiscale, entrez 20% du revenu imposable en FRW, excluant les autres avantages en nature.",
            "Avantage en Nature Autres – Si l'employé bénéficie d'avantages en nature de l'employeur autres que transport ou logement pendant la période fiscale, ceux-ci sont entrés à la valeur marchande en FRW.",
            "Transport Forfaitaire : Montant Forfaitaire d'allocation.",
            "Autres Déductions Médicales : Remplissez le montant s'il y en a.",
            "Prestation de Fin de Contrat : Remplissez le montant s'il y en a.",
            "Prestations de Retraite : Remplissez le montant s'il y en a.",
            "Contribution Ejo-Heza : Remplissez le montant s'il y en a.",
            "Autres Fonds de Pension : Remplissez le montant s'il y en a."
          ]
        },
        {
          type: "paragraph",
          text: "Le système lui-même calcule tous les composants d'impôt et de contributions basés sur les dispositions légales. Lors du dépôt dans Ishema, les informations déposées et le paiement, s'il est effectué, sont automatiquement envoyés à E-tax"
        }
      ]
    },
    rw: {
      title: "Gutanga Amakuru ya PAYE",
      content: [
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru ya PAYE ni bwo bwo butandukanye n'uburyo bwo gutanga amakuru y'ibindi bisoro byo mu gihugu kuko uyu musoro utangwa mu sisiteme ya RSSB yitwa ISHEMA. Mu iyi sisiteme, uburyo bwo gutanga amakuru ya PAYE, Ubwishyu bw'Ubwoba, uburyo bwo kwibyara, uburyo bwo kwivuza, na Ubwishingizi bw'Ubwoba bw'Abaturage (CBHI) bukoresha gutanga amakuru rumwe ku rupfu, aho umusanzu abona ibyemezo by'ukwemera bya buri kimwe cy'ubwishyu bw'ubwoba n'umusoro hejuru. Ibi kuko byose byishingiye ku musaruro w'abakozi na mukoresha."
        },
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru ya PAYE, Ubwishyu bw'Ubwoba, Ubwoba, Kwibyara na CBHI ni uko:"
        },
        {
          type: "list",
          items: [
            "Ukoresheje icyo ari cyo cyose cyo gusura interineti, jya ku www.ishema.rssb.rw hanyuma winjize inomero y'urugendo hanyuma ukande kwinjira.",
            "Injiza TIN y'Ubucuruzi hanyuma Ushimangire Amakuru y'Ubucuruzi: tanga inomero y'itegereza ry'umusoro (TIN) y'ubucuruzi hanyuma usuzume amakuru. Nyamuneka wizere ko TIN yinjiwe ni iyo ikwiye kandi ihuye n'ibyanditswe by'ubusitani.",
            "Tanga Amakuru y'Ubwite: tanga amakuru y'ubwite, harimo izina ryuzuye, ateresi ya imeyili, na inomero y'urugendo. Hamwe na byo, injiza ijambo ry'ibanga ukoresha ubu kugira ngo winjire mu sisiteme ya e-Tax ya RRA.",
            "Wibuke ko Intego hejuru ni ubukoresha bwo gusa mugihe cyo kwandikisha bwa mbere. Ku kwinjira gakurikira, uzakenera gusa gutanga inomero y'urugendo kugira ngo ubone uburyo.",
            "Kwinjira: Kugira ngo winjire, ijambo ry'ibanga ry'igihe kimwe (OTP) rikenera. Kugira ngo ukore OTP, gusa hamagara *876*4044# ku rugendo rwanditse. Injiza kode yasabwa, hanyuma winjire mu Ishema neza. Injiza iyi kode mugihe cyasabwa, hanyuma uzashobora kwinjira neza."
          ]
        },
        {
          type: "paragraph",
          text: "Ku ipaji ya mbere y'uburyo, uzahabwa ubwoba bwo kugira ubucuruzi butandukanye, harimo:"
        },
        {
          type: "list",
          items: [
            "Reba amakuru y'ubucuruzi bwawe: Urashobora gusuzuma no gucunga amakuru y'ubucuruzi, hamwe no kwongeramo abakoresha bandi ku konti y'ubucuruzi.",
            "Suzuma imiterere yawe y'ukwiyubaka: suzuma vuba imiterere y'ukwiyubaka kwa musanzu hanyuma ukurikire amakuru y'uko gutanga amakuru. Ibi bifasha kuguma wamenye ibyo ukenera kugira ngo utange amakuru mu gihe.",
            "Tanga amakuru y'uko gutanga: uburyo bufasha musanzu gutanga amakuru y'uko gutanga vuba, bukora uburyo bwo gutanga amakuru neza. Umusanzu ashobora gutanga amakuru n'ibikurikira by'umusoro vuba."
          ]
        },
        {
          type: "list",
          items: [
            "Niba iyi ni iyambere yo gukoresha sisiteme ya ISHEMA, nyamuneka kurure ifishi y'Excel yatanzwe (ikindi bikurikira cyumwe). Uzuzemo ifishi n'amakuru y'amasaruro y'abakozi bawe.",
            "Nyuma yo gukuzuza, hitamo 'Hitamo ifishi kuva ku mashini yawe' hanyuma kohereza ifishi y'Excel mu sisiteme.",
            "Hitamo ukwezi gushaka gutanga amakuru. Hari uburyo bubiri bwo gutanga amakuru:",
            "Kanda ku buto 'Tanga amakuru' hanyuma hitamo ukwezi gushaka gutanga amakuru.",
            "Cyangwa, urashobora gusa gukanda ku kwezi gakwiye ku shushanyo ryerekanywe hepfo kugira ngo ukomeze no gutanga amakuru.",
            "Nyuma yo kohereza ifishi, sisiteme izashimangira amakuru yatanzwe. Niba amakuru ari yo, sisiteme izerekana 'intsinzi'. Kanda 'Gikurikira' kugira ngo ukomeze. Niba hari ibyosa byagaragaye mu makuru, bizerekana ku shushanyo, byakemure ukoresheje gusubira ku ifishi y'Excel. Uzakenera gukemura ibyosa mbere yo gusubira kohereza ifishi kugira ngo ukomeze.",
            "Suzuma hanyuma ushimangire ibintu byose byabazwe n'ubusitani. Ibi bintu birimo kwishyura kwose kuri buri gahunda. Kanda 'Gikurikira' kugira ngo ushimangire hanyuma ukomeze.",
            "Soma ubutumwa buhepfo uyitegereze hanyuma wizere ko amakuru y'amasaruro yatanzwe ku bakozi bawe ni yo kandi ari yo. Niba ushimangira ko ari yo, kanda 'Shimangira' kugira ngo ukomeze.",
            "Watanze amakuru y'uko gutanga neza. Sohora icyemezo cy'ukwemera kugira ngo ubibe cyangwa kanda 'Reba Ubwinshi' kugira ngo ubone amakuru yongeyeho ku gutanga amakuru kwawe."
          ]
        },
        {
          type: "paragraph",
          text: "Wibuke ko nyuma yo gutanga amakuru, umusanzu ashobora, vuba cyangwa nyuma y'igihe cyatanzwe, gukomeza no guhindura. Guhindura bitangurwa no gukanda ku 'Guhindura Gutanga Amakuru' nk'uko birasobanurwa mu ishushanyo rikurikira."
        },
        {
          type: "heading",
          text: "Ibindi Bikurikira Byumwe"
        },
        {
          type: "paragraph",
          text: "Ikindi bikurikira cyumwe cya PAYE, Ubwishyu bw'Ubwoba, Kwibyara, Ubwoba na CBHI gifite gusa icyiciro kimwe cy'igihe cy'umusoro. Gikenera gukuzuza no kohereza nka Excel cyitandukanye n'ikindi bikurikira cya E-tax gikenera gukururwa, gushimangirwa no kubikwa, hanyuma gikoherezwa mu E-tax."
        },
        {
          type: "list",
          items: [
            "Izina ry'Umuryango: Injiza izina ry'umukozi.",
            "Izina rindi: Injiza izina rindi ry'umukozi.",
            "Inomero ya RSSB: Injiza inomero y'Ubwishyu bw'Ubwoba (SSN) y'umukozi ya RSSB.",
            "NID cyangwa Paseporo: Injiza inomero y'Inyandiko y'Ubwite (ID) y'umukozi cyangwa inomero y'ipaseporo y'umukozi.",
            "Icyiciro cy'Umukozi:",
            "P = Ubuziraherezo,",
            "C = Gihari,",
            "E = Wemewe,",
            "S = Mukoresha wa Kabiri",
            "Umukozi ni Umunyamuryango wa Rama?",
            "Y = Yego,",
            "N = Oya",
            "Umukozi Yishyura Ubwishyu bw'Ubwoba?",
            "Y = Yego,",
            "N = Oya",
            "Umukozi Yishyura Kwibyara?",
            "Y = Yego,",
            "N = Oya",
            "Umukozi Yishyura CBHI?",
            "Y = Yego,",
            "N = Oya",
            "Amasaruro y'Ubwite: Injiza amasaruro y'ubwite y'umukozi mu Franki za Rwanda mu gihe cy'umusoro.",
            "Inyungu mu Miterere Ubwubatsi – Niba umukozi akoresha ubwoba bwo kugera no gukoresha imodoka yatanzwe na mukoresha mu gihe cy'umusoro, injiza 10% y'inguzanyo y'umusoro mu FRW, utabamo izindi nyungu mu miterere.",
            "Inyungu mu Miterere Inzu – Niba umukozi akoresha ubwoba bwo gutura bwa mukoresha mu gihe cy'umusoro, injiza 20% y'inguzanyo y'umusoro mu FRW, utabamo izindi nyungu mu miterere.",
            "Inyungu mu Miterere Izindi – Niba umukozi akoresha inyungu zose mu miterere ziva ku mukoresha zitari ubwubatsi cyangwa gutura mu gihe cy'umusoro, izi zinjizwa ku gaciro k'isoko mu FRW.",
            "Ubwubatsi bwo Gusa: Umubare Ubwubatsi bwo gusa.",
            "Ibindi Bikururwa mu Bwoba: Uzuzemo umubare niba hari.",
            "Inyungu y'Urwego rwo Gusoza: Uzuzemo umubare niba hari.",
            "Inyungu z'Ubwoba: Uzuzemo umubare niba hari.",
            "Ubwishyu bw'Ubwoba bwa Ejo-Heza: Uzuzemo umubare niba hari.",
            "Ibindi Bikoresha by'Ubwishyu bw'Ubwoba: Uzuzemo umubare niba hari."
          ]
        },
        {
          type: "paragraph",
          text: "Sisiteme ubwayo irabara ibintu byose by'umusoro n'ubwishyu bw'ubwoba bishingiye ku bitegeko. Nyuma yo gutanga amakuru mu Ishema, amakuru yatanzwe n'ishyura, niba ryakozwe, byoherezwa mu buryo bwikora ku E-tax"
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

export default PayeDeclaration;