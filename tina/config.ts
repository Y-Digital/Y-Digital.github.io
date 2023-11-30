import { defineConfig } from "tinacms"
import { approachFields } from "./templates"
import { blogFields } from "./templates"
import { cai_case_studyFields } from "./templates"
import { careersFields } from "./templates"
import { companyFields } from "./templates"
import { contactFields } from "./templates"
import { conversational_aiFields } from "./templates"
import { faqFields } from "./templates"
import { homeFields } from "./templates"
import { idp_case_studyFields } from "./templates"
import { intelligent_document_processingFields } from "./templates"
import { numbered_featuresFields } from "./templates"
import { podcastFields } from "./templates"
import { servicesFields } from "./templates"
import { shared_knowledgeFields } from "./templates"
import { solutionsFields } from "./templates"
import { updateFields } from "./templates"

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main"

export default defineConfig({
  branch,
  clientId: "e5e716cc-2aba-4378-b47a-02281e7f0c9b", // Get this from tina.io
  token: "527371c3f095309740ba8381d3d2c1b9ff6b1d1e", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages EN",
        name: "pages_en",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*.en",
        },
        templates: [
          {
            name: "home",
            label: "Home Page",
            fields: [...homeFields()],
          },
          {
            name: "approach",
            label: "Approach Page",
            fields: [...approachFields()],
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: [...contactFields()],
          },
          {
            name: "services",
            label: "Service Page",
            fields: [...servicesFields()],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Pages DE",
        name: "pages_de",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*.de",
        },
        templates: [
          {
            name: "home",
            label: "Home Page",
            fields: [...homeFields()],
          },
          {
            name: "approach",
            label: "Approach Page",
            fields: [...approachFields()],
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: [...contactFields()],
          },
          {
            name: "services",
            label: "Service Page",
            fields: [...servicesFields()],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Pages NL",
        name: "pages_nl",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*.nl",
        },
        templates: [
          {
            name: "home",
            label: "Home Page",
            fields: [...homeFields()],
          },
          {
            name: "approach",
            label: "Approach Page",
            fields: [...approachFields()],
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: [...contactFields()],
          },
          {
            name: "services",
            label: "Service Page",
            fields: [...servicesFields()],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Company",
        name: "company_page",
        path: "content/company",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        templates: [
          {
            name: "company",
            label: "Company Page",
            fields: [...companyFields()],
          },
          {
            name: "careers",
            label: "Career Page",
            fields: [...careersFields()],
          },
          {
            name: "faq",
            label: "Faq Page",
            fields: [...faqFields()],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      // {
      //   format: "md",
      //   label: "Vacancies",
      //   name: "vacancies",
      //   path: "content/company",
      //   frontmatterFormat: "yaml",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "careers.en",
      //   },
      //   fields: [
      //     // {
      //     //   type: "rich-text",
      //     //   name: "body",
      //     //   label: "Body of Document",
      //     //   description: "This is the markdown body",
      //     //   isBody: true,
      //     // },
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "title",
      //     },
      //     {
      //       type: "string",
      //       name: "description",
      //       label: "description",
      //     },
      //     {
      //       type: "string",
      //       name: "layout",
      //       label: "layout",
      //     },
      //     {
      //       type: "string",
      //       name: "lang",
      //       label: "lang",
      //     },
      //     {
      //       type: "string",
      //       name: "translationKey",
      //       label: "translationKey",
      //     },
      //     {
      //       type: "image",
      //       name: "hero_image",
      //       label: "hero_image",
      //     },
      //     {
      //       type: "string",
      //       name: "intro_text",
      //       label: "intro_text",
      //       ui: {
      //         component: "textarea",
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "page_title",
      //       label: "page_title",
      //     },
      //     {
      //       type: "object",
      //       name: "vacancy",
      //       label: "Vacancy",
      //       list: true,
      //       fields: [
      //         {
      //           type: "string",
      //           name: "title",
      //           label: "Title",
      //         },
      //         {
      //           type: "string",
      //           name: "role",
      //           label: "Role",
      //           ui: {
      //             component: "textarea",
      //           },
      //         },
      //         {
      //           type: "string",
      //           name: "profile",
      //           label: "Profile",
      //           ui: {
      //             component: "textarea",
      //           },
      //         },
      //         {
      //           type: "string",
      //           name: "skills_heading",
      //           label: "Skills heading",
      //         },
      //         {
      //           type: "string",
      //           name: "skills",
      //           label: "Skills",
      //           ui: {
      //             component: "textarea",
      //           },
      //         },
      //         {
      //           type: "string",
      //           name: "what_we_offer_heading",
      //           label: "What we offer heading",
      //         },
      //         {
      //           type: "string",
      //           name: "what_we_offer",
      //           label: "What we offer",
      //           ui: {
      //             component: "textarea",
      //           },
      //         },
      //         {
      //           type: "string",
      //           name: "send_cv",
      //           label: "Send CV",
      //           ui: {
      //             component: "textarea",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        format: "md",
        label: "Company/shared-knowledge",
        name: "shared_knowledge",
        path: "content/company/shared-knowledge",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [...shared_knowledgeFields()],
      },
      {
        format: "md",
        label: "Company/shared-knowledge/Blog",
        name: "blog",
        path: "content/company/shared-knowledge/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [...blogFields()],
      },
      {
        format: "md",
        label: "Company/shared-knowledge/Podcast",
        name: "podcast",
        path: "content/company/shared-knowledge/podcast",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          // {
          //   type: "rich-text",
          //   name: "body",
          //   label: "Body of Document",
          //   description: "This is the markdown body",
          //   isBody: true,
          // },
          ...podcastFields(),
        ],
      },
      {
        format: "md",
        label: "Company/shared-knowledge/Updates",
        name: "updates",
        path: "content/company/shared-knowledge/updates",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          // {
          //   type: "rich-text",
          //   name: "body",
          //   label: "Body of Document",
          //   description: "This is the markdown body",
          //   isBody: true,
          // },
          ...updateFields(),
        ],
      },
      {
        format: "md",
        label: "Solutions",
        name: "solution_page",
        path: "content/solutions",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        templates: [
          {
            name: "solutions",
            label: "Solution Page",
            fields: [...solutionsFields()],
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Solutions/AI Search & Personalization",
        name: "ai_search_recommendation",
        path: "content/solutions/ai-search-recommendation",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },

        fields: [...conversational_aiFields()],

        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Solutions/Conversational AI",
        name: "conversational_ai",
        path: "content/solutions/conversational-ai",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },

        fields: [...conversational_aiFields()],

        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Solutions/Intelligent Document Processing",
        name: "intelligent_document_processing",
        path: "content/solutions/intelligent-document-processing",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },

        fields: [...intelligent_document_processingFields()],

        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      // {
      //   format: "md",
      //   label: "C-AI Case Study",
      //   name: "c_ai_case_study",
      //   path: "content/solutions/conversational-ai",
      //   frontmatterFormat: "yaml",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [
      //     // {
      //     //   type: "rich-text",
      //     //   name: "body",
      //     //   label: "Body of Document",
      //     //   description: "This is the markdown body",
      //     //   isBody: true,
      //     // },
      //     ...cai_case_studyFields(),
      //   ],
      // },
      // {
      //   format: "md",
      //   label: "IDP Case Study",
      //   name: "idp_case_study",
      //   path: "content/solutions/intelligent-document-processing",
      //   frontmatterFormat: "yaml",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [
      //     // {
      //     //   type: "rich-text",
      //     //   name: "body",
      //     //   label: "Body of Document",
      //     //   description: "This is the markdown body",
      //     //   isBody: true,
      //     // },
      //     ...idp_case_studyFields(),
      //   ],
      // },
    ],
  },
})
