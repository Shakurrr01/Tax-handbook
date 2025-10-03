import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FlatTaxDeclaration = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Flat Tax Income Tax using E-Tax",
      content: [
        {
          type: "paragraph",
          text: "Flat Tax regime Income Tax can be declared using E-Tax or M-Declaration. If the taxpayer is registered for other domestic tax types as well as Income Tax, then Flat Tax regime must be declared using E-Tax, instead of M-Declaration."
        },
        {
          type: "paragraph",
          text: "The declaration process for Flat Tax regime using E-Tax is similar to other domestic taxes, see page 97 for details."
        },
        {
          type: "paragraph",
          text: "However, the process of declaring Flat Tax regime is even simpler as there are no annexures. The taxpayer only has to complete the declaration form and submit the declaration."
        },
        {
          type: "heading",
          text: "Flat Tax Declaration Form"
        },
        {
          type: "paragraph",
          text: "Firstly, this requires logging into E-Tax and entering the declaration form, see page 97 for more details on choosing the applicable declaration."
        },
        {
          type: "paragraph",
          text: "The Flat Tax regime declaration form for PIT or CIT has seven (7) fields. The only fields that must be entered are:"
        },
        {
          type: "list",
          items: [
            "Annual Turnover - Enter the turnover of the business during the tax year and withholding on other payments if any."
          ]
        },
        {
          type: "paragraph",
          text: "The other fields are automatically filled by the system, where applicable. After entering the required information, click save to calculate the 'Annual Flat Amount of Tax Due' automatically."
        },
        {
          type: "heading",
          text: "Example 20"
        },
        {
          type: "paragraph",
          text: "An example Flat Tax Income Tax declaration is entered below. The annual amount of Flat Tax due for this taxpayer in this tax period is FRW 60,000."
        },
        {
          type: "paragraph",
          text: "After checking that the fields entered are correct, click 'Continue with uploading annexure' then Compare declaration and annexures before clicking on 'Submit' the declaration. After successfully submitting, this screen will load."
        },
        {
          type: "paragraph",
          text: "Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due. See page 436 for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines."
        }
      ]
    },
    fr: {
      title: "Déclaration de l'Impôt sur le Revenu à Taux Fixe en utilisant E-Tax",
      content: [
        {
          type: "paragraph",
          text: "L'Impôt sur le Revenu au régime de Taux Fixe peut être déclaré en utilisant E-Tax ou M-Declaration. Si le contribuable est enregistré pour d'autres types d'impôts nationaux ainsi que l'Impôt sur le Revenu, alors le régime de Taux Fixe doit être déclaré en utilisant E-Tax, au lieu de M-Declaration."
        },
        {
          type: "paragraph",
          text: "Le processus de déclaration pour le régime de Taux Fixe en utilisant E-Tax est similaire aux autres impôts nationaux, voir page 97 pour plus de détails."
        },
        {
          type: "paragraph",
          text: "Cependant, le processus de déclaration du régime de Taux Fixe est encore plus simple car il n'y a pas d'annexes. Le contribuable n'a qu'à remplir le formulaire de déclaration et soumettre la déclaration."
        },
        {
          type: "heading",
          text: "Formulaire de Déclaration de Taux Fixe"
        },
        {
          type: "paragraph",
          text: "Premièrement, cela nécessite de se connecter à E-Tax et d'entrer dans le formulaire de déclaration, voir page 97 pour plus de détails sur le choix de la déclaration applicable."
        },
        {
          type: "paragraph",
          text: "Le formulaire de déclaration du régime de Taux Fixe pour PIT ou CIT a sept (7) champs. Les seuls champs qui doivent être remplis sont :"
        },
        {
          type: "list",
          items: [
            "Chiffre d'Affaires Annuel - Entrez le chiffre d'affaires de l'entreprise pendant l'année fiscale et la retenue sur d'autres paiements le cas échéant."
          ]
        },
        {
          type: "paragraph",
          text: "Les autres champs sont automatiquement remplis par le système, le cas échéant. Après avoir entré les informations requises, cliquez sur sauvegarder pour calculer automatiquement le 'Montant Annuel Fixe d'Impôt Dû'."
        },
        {
          type: "heading",
          text: "Exemple 20"
        },
        {
          type: "paragraph",
          text: "Un exemple de déclaration d'Impôt sur le Revenu à Taux Fixe est entré ci-dessous. Le montant annuel de Taux Fixe dû pour ce contribuable dans cette période fiscale est de 60 000 FRW."
        },
        {
          type: "paragraph",
          text: "Après avoir vérifié que les champs entrés sont corrects, cliquez sur 'Continuer avec le téléchargement de l'annexe' puis Comparez la déclaration et les annexes avant de cliquer sur 'Soumettre' la déclaration. Après soumission réussie, cet écran se chargera."
        },
        {
          type: "paragraph",
          text: "Cliquez sur 'Voir le Reçu d'Accusé de Réception' pour voir le numéro de référence RRA et le total d'impôt dû. Voir page 436 pour plus de détails sur le paiement des impôts. N'oubliez pas que le paiement doit également être effectué avant la date limite pour éviter les pénalités et les amendes."
        }
      ]
    },
    rw: {
      title: "Gutanga Amakuru y'Umusoro w'Inguzanyo ukoresheje E-Tax",
      content: [
        {
          type: "paragraph",
          text: "Umusoro w'Inguzanyo wo mu miterere y'Umusoro w'Igipimo cyose wakoresheje E-Tax cyangwa M-Declaration. Niba umusanzu yanditse ku bindi bice by'umusoro wo mu gihugu hamwe n'Umusoro w'Inguzanyo, noneho umusoro wo mu miterere y'Umusoro w'Igipimo cyose ugomba gutangwa ukoresheje E-Tax, aho M-Declaration."
        },
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru y'umusoro wo mu miterere y'Umusoro w'Igipimo cyose ukoresheje E-Tax ni bwo bwo nk'ibindi bisoro byo mu gihugu, reba ipaji ya 97 ubwinshi."
        },
        {
          type: "paragraph",
          text: "Ariko, uburyo bwo gutanga amakuru y'umusoro wo mu miterere y'Umusoro w'Igipimo cyose ni bwo bwo bworoshye kuko ntihari n'ibindi bikurikira. Umusanzu agomba gusa gukuzuza ifishi ry'uko gutanga amakuru no gutanga amakuru."
        },
        {
          type: "heading",
          text: "Ifishi ry'Umusoro w'Igipimo cyose"
        },
        {
          type: "paragraph",
          text: "Mbere, ibi byakenera kwinjira mu E-Tax no kwinjira mu ifishi ry'uko gutanga amakuru, reba ipaji ya 97 ubwinshi ku guhitamo amakuru akwiye."
        },
        {
          type: "paragraph",
          text: "Ifishi ry'uko gutanga amakuru y'umusoro wo mu miterere y'Umusoro w'Igipimo cyose ya PIT cyangwa CIT ifite imirongo indwi (7). Imirongo gusa igomba kwinjirwamo ni:"
        },
        {
          type: "list",
          items: [
            "Umusaruro w'Umwaka - Injiza umusaruro w'ubucuruzi mu mwaka w'umusoro n'umusoro wakururwa ku bandi mabwiriza niba hari."
          ]
        },
        {
          type: "paragraph",
          text: "Imyirongo yandi irazuzwa mu buryo bwikora na sisiteme, niba bikwiye. Nyuma yo gutanga amakuru akenera, kanda 'Bika' kugira ngo ubare 'Umubare w'Umwaka w'Umusoro w'Igipimo cyose wakenera' mu buryo bwikora."
        },
        {
          type: "heading",
          text: "Urugero 20"
        },
        {
          type: "paragraph",
          text: "Urugero rwo gutanga amakuru y'Umusoro w'Inguzanyo w'Igipimo cyose rwinjijwe hepfo. Umubare w'umwaka w'Umusoro w'Igipimo cyose wakenera kuri uyu musanzu mu gihe cy'umusoro ni FRW 60,000."
        },
        {
          type: "paragraph",
          text: "Nyuma yo gusuzuma ko imirongo yinjiwe ni iyo ikwiye, kanda 'Komeza no kohereza ibindi bikurikira' hanyuma Gereranya amakuru y'uko gutanga n'ibindi bikurikira mbere yo gukanda 'Tanga' amakuru. Nyuma yo gutanga neza, iyi shushanyo izakururwa."
        },
        {
          type: "paragraph",
          text: "Kanda 'Reba Icyemezo cy'Ukwemera' kugira ngo urebe inomero y'itegereza ya RRA n'umusoro wose wakenera. Reba ipaji ya 436 ubwinshi ku kwishyura amasoro. Wibuke ko kwishyura bikwiye kandi gukorwa mbere y'umunsi w'urugero kugira ngo utazakira ibihano n'amande."
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

export default FlatTaxDeclaration;