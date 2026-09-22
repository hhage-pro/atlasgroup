/* Prefix for public assets so the site also works under a sub-path deployment (GitHub Pages). */
export const asset=(path:string)=>import.meta.env.BASE_URL.replace(/\/$/,'')+path;

export type Division = {
  slug:string; brand:string; service:string; number:string; tagline:string; heading:string;
  intro:string; image:string; alt:string; areas:{title:string;body:string}[];
  questions:{q:string;a:string}[]; note?:string;
};
/* The four Atlas companies. `brand` is the lockup name, `service` is what a visitor is looking for
   and is also the value the inquiry form sends (see server/inquiries.mjs). */
export const divisions:Division[]=[
  {slug:'properties',brand:'Atlas Properties',service:'Real estate',number:'01',tagline:'Find your place. Make your move.',heading:'A new address.\nA new beginning.',
   intro:'Buying, selling, or seeing the potential in a property. Bring your plans to a Michigan-licensed broker with Metro Detroit roots and a view of the whole picture.',image:'interior',alt:'Illustrative sunlit Michigan home interior with oak flooring and garden views',
   areas:[{title:'Buy with a clear direction',body:'Start with your priorities, your timeline, and the places you want to call home. Build a focused search and understand the steps ahead.'},{title:'Sell with a thoughtful plan',body:'Give your property the attention it deserves. Discuss positioning, presentation, marketing, and the path from listing to closing.'},{title:'Explore property opportunities',body:'Have a renovation or development in mind? Bring property questions and construction considerations into the same conversation.'}],
   questions:[{q:'Where does Atlas Properties work?',a:'Atlas is based in Metro Detroit and serves clients across Michigan. Tell us the location and type of property so we can discuss the right next step.'},{q:'Can I talk to you before I am ready to buy or sell?',a:'Yes. A first conversation can help clarify your goals, timeline, and the information you need before making a move.'},{q:'Do I need to use the other Atlas companies?',a:'No. Start with the company you need. Any other Atlas service is a separate choice, and you remain free to work with other providers.'}]},
  {slug:'insurance',brand:'Atlas Insurance',service:'Insurance',number:'02',tagline:'Protect the life you are building.',heading:'For what matters.\nAnd what comes next.',
   intro:'Your protection should start with your life—not a stack of unfamiliar terms. Talk through your needs, ask questions, and explore life, health, home, auto, and business coverage with a licensed Michigan producer.',image:'insurance',alt:'Illustrative Michigan brick colonial home at dusk after rain, porch light glowing',
   areas:[{title:'Home & auto',body:'A place to come home to. A way to get there. Discuss coverage for your home, belongings, and vehicles as your circumstances change.'},{title:'Life & health',body:'Plan a conversation around the people who depend on you and the coverage questions you want answered.'},{title:'Business protection',body:'Explore property and casualty coverage questions for your business, with attention to the work you do and the exposures you face.'}],
   questions:[{q:'Can I ask about insurance without buying a property?',a:'Absolutely. Atlas Insurance is a standalone company. You can contact us about life, health, home, auto, or business coverage on its own.'},{q:'What should I have ready for a first conversation?',a:'A general description of what you want to protect and any questions about your current coverage. Do not submit policy numbers, medical information, or other sensitive documents through this website.'},{q:'Does an inquiry put coverage in place?',a:'No. A website inquiry does not bind, change, or cancel insurance coverage. Coverage must be separately confirmed through the applicable process.'}],note:'Coverage availability and terms depend on the insurer, eligibility, and underwriting. A website inquiry does not bind coverage.'},
  {slug:'mortgage',brand:'Atlas Mortgage',service:'Mortgages',number:'03',tagline:'A clearer path from plans to keys.',heading:'Make room\nfor your future.',
   intro:'Financing is part of the bigger picture. Start a conversation about your homeownership plans and the questions to work through before your next move.',image:'mortgage',alt:'Illustrative sunlit Michigan kitchen on a first morning in a new home, house keys on the counter',
   areas:[{title:'Your first home',body:'Get oriented around the process, your goals, and the information needed to explore financing.'},{title:'Your next move',body:'Consider your property search and financing timeline together, with space to understand the next steps.'},{title:'A fresh look at your financing',body:'Have questions about your existing mortgage or a future change? Start with your circumstances and what you want to achieve.'}],
   questions:[{q:'Is this form a mortgage application?',a:'No. It is a request for an initial conversation. Do not enter Social Security numbers, account details, income documents, or other sensitive financial information.'},{q:'Can I ask about financing before choosing a property?',a:'Yes. You can start with your plans and timeline, then discuss what information is needed to explore the available next steps.'},{q:'Does Atlas Mortgage advertise rates on this website?',a:'No. This website does not provide a rate quote, loan approval, or commitment to lend. Any specific financing discussion requires a separate review.'}],note:'An inquiry is not a loan application, approval, rate quote, or commitment to lend. Financing is subject to applicable eligibility and underwriting requirements.'},
  {slug:'construction',brand:'Atlas Construction',service:'Construction',number:'04',tagline:'See the potential. Build what is next.',heading:'Good ideas deserve\na solid foundation.',
   intro:'From rethinking an existing space to exploring a new project, begin with the possibilities—and a practical conversation with a licensed Michigan builder about how to get there.',image:'construction',alt:'Illustrative Michigan home addition under construction with new timber framing',
   areas:[{title:'Renovation & improvement',body:'Talk through the changes that could make a property work better, from the first idea to a clearly defined scope.'},{title:'Property development',body:'Bring a site or opportunity into focus. Discuss objectives, project considerations, and the questions that need answers before moving ahead.'},{title:'Planning with perspective',body:'Connect your plans for a building with your plans for the property. Align the conversation around scope, priorities, and timing.'}],
   questions:[{q:'Can I discuss a property before buying it?',a:'Yes. An early conversation can help identify construction questions worth exploring before you move forward. Any formal evaluation or scope is agreed separately.'},{q:'What should I bring to an initial discussion?',a:'The property location, a brief description of the work, and your ideal timeline. If you have drawings or photos, mention them and arrange a suitable way to share them.'},{q:'Are the images on this site completed Atlas projects?',a:'No. The imagery illustrates the brand’s design direction. It is not a portfolio of completed Atlas work or an advertisement for available properties.'}],note:'Project scope, pricing, timelines, and availability are established separately after review.'}
];
/* Kept for older links. */
export const legacyRoutes:Record<string,string>={'/real-estate':'/properties','/mortgages':'/mortgage'};

export const steps=[
 {title:'Start with your goals',body:'Tell us what you have in mind.'},
 {title:'See the whole picture',body:'Connect the right Atlas company and people.'},
 {title:'Move forward, together',body:'Take the next step with a clear plan.'},
];

/* Founder. Only facts supplied by the family are stated here; license numbers are
   intentionally absent until they are confirmed for publication. */
export const founder={
 name:'Adam Hage',
 title:'Founder & Principal Broker',
 image:'adam-hage',
 alt:'Adam Hage, founder and principal broker of Atlas Group, smiling and holding a house key',
 quote:'The important decisions in your life deserve someone who sees how they connect.',
 bio:'Adam built Atlas Properties Plus as a Michigan real estate brokerage and, over the years, added the licenses his clients kept asking for—mortgage, insurance, and construction—so one relationship could carry a family from a first conversation to a set of keys. Atlas Group is the next chapter of that work.',
 credentials:[
  {label:'Real estate',value:'Michigan licensed real estate broker'},
  {label:'Mortgage',value:'Michigan mortgage license'},
  {label:'Insurance',value:'Michigan insurance producer — life, health, property & casualty'},
  {label:'Construction',value:'Michigan builder license'},
 ],
 credentialNote:'License numbers are available on request and will be published here before launch.',
};
