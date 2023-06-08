import type { TinaField } from "tinacms";
export function approachFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "object",
      name: "hero_circles",
      label: "hero_circles",
      fields: [
        {
          type: "string",
          name: "left_circle",
          label: "left_circle",
        },
        {
          type: "string",
          name: "right_circle",
          label: "right_circle",
        },
      ],
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "object",
      name: "numbered_features",
      label: "numbered_features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "two_round_buttons",
      label: "two_round_buttons",
      fields: [
        {
          type: "string",
          name: "left_button",
          label: "left_button",
        },
        {
          type: "string",
          name: "right_button",
          label: "right_button",
        },
        {
          type: "string",
          name: "left_button_link",
          label: "left_button_link",
        },
        {
          type: "string",
          name: "right_button_link",
          label: "right_button_link",
        },
      ],
    },
  ] as TinaField[];
}
export function blogFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      name: "Content",
      label: "Content",
      isBody: true,
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
  ] as TinaField[]
}
export function cai_case_studyFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "intro_text",
      label: "Intro text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function careersFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "object",
      name: "vacancy",
      label: "Vacancy",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "role",
          label: "Role",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "profile",
          label: "Profile",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "skills_heading",
          label: "Skills heading",
        },
        {
          type: "string",
          name: "skills",
          label: "Skills",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "what_we_offer_heading",
          label: "What we offer heading",
        },
        {
          type: "string",
          name: "what_we_offer",
          label: "What we offer",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "send_cv",
          label: "Send CV",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function companyFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "dna_circles",
      label: "DNA circles",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
        },
      ],
    },
    {
      type: "object",
      name: "feature",
      label: "Feature",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "team",
      label: "Team",
      list: true,
      fields: [
        {
          type: "image",
          name: "photo",
          label: "Photo",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "job",
          label: "Job",
        },
      ],
    },
    {
      type: "string",
      name: "academy",
      label: "Academy",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "ally_platform",
      label: "Ally",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "we_are_hiring",
      label: "We are hiring",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "round_button",
      label: "Round button",
      fields: [
        {
          type: "string",
          name: "button_text",
          label: "Button text",
        },
        {
          type: "string",
          name: "button_link",
          label: "Button link",
        },
      ],
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "string",
      name: "page_title",
      label: "Page title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "Intro text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function conversational_aiFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "object",
      name: "hero_circles",
      label: "hero_circles",
      fields: [
        {
          type: "string",
          name: "left_circle",
          label: "left_circle",
        },
        {
          type: "string",
          name: "right_circle",
          label: "right_circle",
        },
      ],
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "page_heading_2",
      label: "Page heading 2",
    },
    {
      type: "object",
      name: "chatbots",
      label: "chatbots",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "smart_call_assistance",
      label: "smart_call_assistance",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "employee_assistants",
      label: "employee_assistants",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "voice_assistant",
      label: "voice_assistant",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "two_round_buttons",
      label: "two_round_buttons",
      fields: [
        {
          type: "string",
          name: "left_button",
          label: "left_button",
        },
        {
          type: "string",
          name: "right_button",
          label: "right_button",
        },
        {
          type: "string",
          name: "left_button_link",
          label: "left_button_link",
        },
        {
          type: "string",
          name: "right_button_link",
          label: "right_button_link",
        },
      ],
    },
    ...numbered_featuresFields(),
  ] as TinaField[];
}
export function faqFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "q_and_a",
      label: "Q and A",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function homeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "hero_image",
      label: "Hero image",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "object",
      name: "hero_slide",
      label: "Hero slide",
      list: true,
      fields: [
        {
          type: "image",
          name: "slide_image",
          label: "Slide image",
        },
        {
          type: "string",
          name: "slide_left_circle",
          label: "Slide left circle",
        },
        {
          type: "string",
          name: "slide_right_circle",
          label: "Slide right circle",
        },
      ],
    },
    {
      type: "object",
      name: "hero_circles",
      label: "hero_circles",
      fields: [
        {
          type: "string",
          name: "left_circle",
          label: "left_circle",
        },
        {
          type: "string",
          name: "right_circle",
          label: "right_circle",
        },
      ],
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "blue_button",
      label: "blue_button",
      fields: [
        {
          type: "string",
          name: "dark_text",
          label: "dark_text",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "quote_slide",
      label: "quote_slide",
      list: true,
      fields: [
        {
          type: "string",
          name: "quote_text",
          label: "quote_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "author",
          label: "author",
        },
        {
          type: "string",
          name: "from",
          label: "from",
        },
        {
          type: "image",
          name: "photo",
          label: "photo",
        },
      ],
    },
    {
      type: "object",
      name: "media",
      label: "Media",
      fields: [
        {
          type: "string",
          name: "first_item",
          label: "First item",
        },
        {
          type: "string",
          name: "first_item_link",
          label: "First item link",
        },
        {
          type: "string",
          name: "second_item",
          label: "Second item",
        },
        {
          type: "string",
          name: "second_item_link",
          label: "Second item link",
        },
        {
          type: "string",
          name: "third_item",
          label: "Third item",
        },
        {
          type: "string",
          name: "third_item_link",
          label: "Third item link",
        },
      ],
    },
    {
      type: "object",
      name: "second_round_button",
      label: "second_round_button",
      fields: [
        {
          type: "string",
          name: "button_text",
          label: "button_text",
        },
        {
          type: "string",
          name: "button_link",
          label: "button_link",
        },
      ],
    },
    ...numbered_featuresFields(),
    {
      type: "image",
      name: "footer_photo",
      label: "footer_photo",
    },
  ] as TinaField[];
}
export function idp_case_studyFields() {
  return [
    {
      type: "string",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function intelligent_document_processingFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "object",
      name: "hero_circles",
      label: "hero_circles",
      fields: [
        {
          type: "string",
          name: "left_circle",
          label: "left_circle",
        },
        {
          type: "string",
          name: "right_circle",
          label: "right_circle",
        },
      ],
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "page_heading_2",
      label: "page_heading_2",
    },
    {
      type: "object",
      name: "legal_contract_checker",
      label: "legal_contract_checker",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "realtime_information_recap",
      label: "realtime_information_recap",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "esg_scan",
      label: "esg_scan",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "compliance_reviewer",
      label: "compliance_reviewer",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "two_round_buttons",
      label: "two_round_buttons",
      fields: [
        {
          type: "string",
          name: "left_button",
          label: "left_button",
        },
        {
          type: "string",
          name: "right_button",
          label: "right_button",
        },
        {
          type: "string",
          name: "left_button_link",
          label: "left_button_link",
        },
        {
          type: "string",
          name: "right_button_link",
          label: "right_button_link",
        },
      ],
    },
    ...numbered_featuresFields(),
  ] as TinaField[];
}
export function numbered_featuresFields() {
  return [
    {
      type: "object",
      name: "numbered_features",
      label: "numbered_features",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
          required: true,
        },
        {
          type: "string",
          name: "text",
          label: "text",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "image_link",
          label: "image_link",
          required: true,
        },
      ],
    },
  ] as TinaField[];
}
export function podcastFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "spotify",
      label: "spotify",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "spotify_code",
          label: "spotify_code",
        },
      ],
    },
    {
      type: "object",
      name: "youtube",
      label: "youtube",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "youtube_code",
          label: "youtube_code",
        },
      ],
    },
  ] as TinaField[]
}
export function servicesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "round_button",
      label: "Round button",
      fields: [
        {
          type: "string",
          name: "button_text",
          label: "Button text",
        },
        {
          type: "string",
          name: "button_link",
          label: "Button link",
        },
      ],
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "object",
      name: "cards",
      label: "cards",
      list: true,
      fields: [
        {
          type: "string",
          name: "card_heading",
          label: "card_heading",
        },
        {
          type: "string",
          name: "list_heading",
          label: "list_heading",
        },
        {
          type: "string",
          name: "list",
          label: "list",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function shared_knowledgeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "string",
      name: "page_title",
      label: "page_title",
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function solutionsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "translationKey",
      label: "translationKey",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero_image",
    },
    {
      type: "object",
      name: "hero_circles",
      label: "hero_circles",
      fields: [
        {
          type: "string",
          name: "left_circle",
          label: "left_circle",
        },
        {
          type: "string",
          name: "right_circle",
          label: "right_circle",
        },
      ],
    },
    {
      type: "string",
      name: "intro_text",
      label: "intro_text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "conversational_ai",
      label: "conversational_ai",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "object",
      name: "intelligent_document_processing",
      label: "intelligent_document_processing",
      fields: [
        {
          type: "string",
          name: "box_title",
          label: "box_title",
        },
        {
          type: "string",
          name: "box_text",
          label: "box_text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
    {
      type: "string",
      name: "h2heading",
      label: "h2heading",
    },
    {
      type: "string",
      name: "h3heading",
      label: "h3heading",
    },
    {
      type: "string",
      name: "ally_platform",
      label: "ally_platform",
    },
  ] as TinaField[];
}
export function updateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "image",
      name: "featured_image",
      label: "featured_image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
