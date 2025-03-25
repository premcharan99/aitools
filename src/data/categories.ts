import { Brain, MessageSquare, Image, Code, Palette, Notebook as Robot, Music, Video, Database, Mic, Gamepad2, FileText, Briefcase } from 'lucide-react';
import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Advanced ML and Deep Learning Tools',
    icon: Brain,
    tools: [
      {
        id: 'tensorflow',
        name: 'TensorFlow',
        description: 'Open-source framework for building and training ML models.',
        url: 'https://tensorflow.org',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'pytorch',
        name: 'PyTorch',
        description: 'Flexible deep learning framework for research and production.',
        url: 'https://pytorch.org',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'h2o-ai',
        name: 'H2O.ai',
        description: 'Scalable ML platform for predictive modeling.',
        url: 'https://h2o.ai',
        pricing: 'freemium',
        category: 'machine-learning'
      },
      {
        id: 'azure-ml',
        name: 'Microsoft Azure Machine Learning',
        description: 'Cloud-based ML model building and deployment.',
        url: 'https://azure.microsoft.com',
        pricing: 'paid',
        category: 'machine-learning'
      },
      {
        id: 'vertex-ai',
        name: 'Google Cloud Vertex AI',
        description: 'Managed ML platform for scalable model training.',
        url: 'https://cloud.google.com/vertex-ai',
        pricing: 'paid',
        category: 'machine-learning'
      },
      {
        id: 'keras',
        name: 'Keras',
        description: 'High-level API for neural networks, runs on TensorFlow.',
        url: 'https://keras.io',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'scikit-learn',
        name: 'Scikit-learn',
        description: 'Simple ML library for data mining and analysis.',
        url: 'https://scikit-learn.org',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'xgboost',
        name: 'XGBoost',
        description: 'Optimized gradient boosting library for ML tasks.',
        url: 'https://xgboost.ai',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'lightgbm',
        name: 'LightGBM',
        description: 'Fast, distributed gradient boosting framework.',
        url: 'https://lightgbm.readthedocs.io',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'catboost',
        name: 'CatBoost',
        description: 'Gradient boosting library for categorical data.',
        url: 'https://catboost.ai',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'spark-mllib',
        name: 'Apache Spark MLlib',
        description: 'Scalable ML library for big data.',
        url: 'https://spark.apache.org/mllib',
        pricing: 'free',
        category: 'machine-learning'
      },
      {
        id: 'rapidminer',
        name: 'RapidMiner',
        description: 'Data science platform with ML capabilities.',
        url: 'https://rapidminer.com',
        pricing: 'freemium',
        category: 'machine-learning'
      },
      {
        id: 'knime',
        name: 'KNIME',
        description: 'Open-source platform for ML and data analytics.',
        url: 'https://knime.com',
        pricing: 'freemium',
        category: 'machine-learning'
      },
      {
        id: 'datarobot',
        name: 'DataRobot',
        description: 'Automated ML platform for enterprise use.',
        url: 'https://datarobot.com',
        pricing: 'paid',
        category: 'machine-learning'
      },
      {
        id: 'automl',
        name: 'AutoML (Google)',
        description: 'Automated ML model creation tool.',
        url: 'https://cloud.google.com/automl',
        pricing: 'paid',
        category: 'machine-learning'
      }
    ]
  },
  {
    id: 'chatbots',
    name: 'Chatbots',
    description: 'Conversational AI Solutions',
    icon: MessageSquare,
    tools: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced conversational AI for natural language tasks.',
        url: 'https://chat.openai.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'bard',
        name: 'Bard',
        description: "Google's conversational AI for natural interactions.",
        url: 'https://bard.google.com',
        pricing: 'free',
        category: 'chatbots'
      },
      {
        id: 'claude',
        name: 'Claude',
        description: 'Ethical, safe chatbot for business and personal use.',
        url: 'https://anthropic.com',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'dialogflow',
        name: 'Dialogflow',
        description: "Google's platform for building chatbots.",
        url: 'https://dialogflow.cloud.google.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'bot-framework',
        name: 'Microsoft Bot Framework',
        description: 'Tools to create enterprise-grade bots.',
        url: 'https://dev.botframework.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'rasa',
        name: 'Rasa',
        description: 'Open-source framework for custom chatbots.',
        url: 'https://rasa.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'watson-assistant',
        name: 'IBM Watson Assistant',
        description: 'AI chatbot for business applications.',
        url: 'https://ibm.com/watson/assistant',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'lex',
        name: 'Amazon Lex',
        description: 'AWS service for voice and text chatbots.',
        url: 'https://aws.amazon.com/lex',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'tidio',
        name: 'Tidio',
        description: 'Chatbot for customer support and e-commerce.',
        url: 'https://tidio.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'landbot',
        name: 'Landbot',
        description: 'No-code chatbot builder for websites.',
        url: 'https://landbot.io',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'botpress',
        name: 'Botpress',
        description: 'Open-source platform for chatbot development.',
        url: 'https://botpress.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'pandorabots',
        name: 'Pandorabots',
        description: 'AIML-based chatbot creation platform.',
        url: 'https://pandorabots.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'manychat',
        name: 'ManyChat',
        description: 'Chatbot for marketing on social platforms.',
        url: 'https://manychat.com',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'drift',
        name: 'Drift',
        description: 'Conversational AI for sales and marketing.',
        url: 'https://drift.com',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'intercom',
        name: 'Intercom',
        description: 'AI chatbot for customer engagement.',
        url: 'https://intercom.com',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'grok',
        name: 'Grok',
        description: 'AI chatbot focused on truthful, helpful answers.',
        url: 'https://www.xai.com/grok',
        pricing: 'free',
        category: 'chatbots'
      },
      {
        id: 'character-ai',
        name: 'Character AI',
        description: 'Create and interact with AI characters for roleplay.',
        url: 'https://character.ai',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'chatsonic',
        name: 'ChatSonic',
        description: 'Conversational AI with real-time web search.',
        url: 'https://writesonic.com/chat',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'youchat',
        name: 'YouChat',
        description: 'AI chatbot integrated into a search engine.',
        url: 'https://you.com',
        pricing: 'free',
        category: 'chatbots'
      },
      {
        id: 'perplexity-ai',
        name: 'Perplexity AI',
        description: 'Conversational search engine with detailed answers.',
        url: 'https://www.perplexity.ai',
        pricing: 'freemium',
        category: 'chatbots'
      },
      {
        id: 'cohere',
        name: 'Cohere',
        description: 'AI models for natural language processing in chatbots.',
        url: 'https://cohere.ai',
        pricing: 'paid',
        category: 'chatbots'
      },
      {
        id: 'jasper-chat',
        name: 'Jasper Chat',
        description: 'Conversational AI for content creation.',
        url: 'https://www.jasper.ai',
        pricing: 'paid',
        category: 'chatbots'
      }
    ]
  },
  {
    id: 'image-generation',
    name: 'Image Generation',
    description: 'AI-Powered Image Creation Tools',
    icon: Image,
    tools: [
      {
        id: 'dalle3',
        name: 'DALL-E 3',
        description: 'Text-to-image generator via Microsoft Copilot.',
        url: 'https://imagine.withcopilot.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'High-quality image generation via Discord.',
        url: 'https://midjourney.com',
        pricing: 'paid',
        category: 'image-generation'
      },
      {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        description: 'Open-source text-to-image model.',
        url: 'https://stability.ai',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'dreamstudio',
        name: 'DreamStudio',
        description: 'Stable Diffusion-based image creator.',
        url: 'https://dreamstudio.ai',
        pricing: 'paid',
        category: 'image-generation'
      },
      {
        id: 'canva-ai',
        name: 'Canva AI',
        description: 'AI-powered design tool for images.',
        url: 'https://canva.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'runwayml',
        name: 'RunwayML',
        description: 'AI for image and video generation.',
        url: 'https://runwayml.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'artbreeder',
        name: 'Artbreeder',
        description: 'Collaborative AI image creation tool.',
        url: 'https://artbreeder.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'nightcafe',
        name: 'NightCafe',
        description: 'AI art generator with multiple styles.',
        url: 'https://nightcafe.studio',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'deepart',
        name: 'DeepArt',
        description: 'Turns photos into artistic styles.',
        url: 'https://deepart.io',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'vanceai',
        name: 'VanceAI',
        description: 'AI for image enhancement and generation.',
        url: 'https://vanceai.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'fotor-ai',
        name: 'Fotor AI',
        description: 'AI image editor and generator.',
        url: 'https://fotor.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'craiyon',
        name: 'Craiyon',
        description: 'Free text-to-image AI tool.',
        url: 'https://craiyon.com',
        pricing: 'free',
        category: 'image-generation'
      },
      {
        id: 'picsart-ai',
        name: 'Picsart AI',
        description: 'AI tools for image creation and editing.',
        url: 'https://picsart.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'lensa',
        name: 'Lensa',
        description: 'AI-powered photo editing and art generation.',
        url: 'https://prisma-ai.com/lensa',
        pricing: 'paid',
        category: 'image-generation'
      },
      {
        id: 'photoleap',
        name: 'Photoleap',
        description: 'AI-driven image creation and editing.',
        url: 'https://photoleapapp.com',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'leonardo-ai',
        name: 'Leonardo AI',
        description: 'AI art generation for game design and creative projects.',
        url: 'https://leonardo.ai',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'blue-willow',
        name: 'Blue Willow',
        description: 'AI image generation tool for creating art from text prompts.',
        url: 'https://www.bluewillow.ai',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'designs-ai',
        name: 'Designs.ai',
        description: 'AI-powered design platform for creating logos and graphics.',
        url: 'https://designs.ai',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'remove-bg',
        name: 'Remove.bg',
        description: 'AI tool for automatically removing backgrounds from images.',
        url: 'https://www.remove.bg',
        pricing: 'freemium',
        category: 'image-generation'
      },
      {
        id: 'logoai',
        name: 'LogoAI',
        description: 'AI-powered logo maker for custom designs.',
        url: 'https://www.logoai.com',
        pricing: 'paid',
        category: 'image-generation'
      },
      {
        id: 'bing-image-creator',
        name: 'Bing Image Creator',
        description: 'AI tool for generating images from text prompts, powered by DALL-E.',
        url: 'https://www.bing.com/images/create',
        pricing: 'free',
        category: 'image-generation'
      }
    ]
  },
  {
    id: 'code-generation',
    name: 'Code Generation',
    description: 'AI Coding Assistants',
    icon: Code,
    tools: [
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'Real-time code suggestions in IDEs.',
        url: 'https://copilot.github.com',
        pricing: 'paid',
        category: 'code-generation'
      },
      {
        id: 'amazon-q',
        name: 'Amazon Q Developer',
        description: 'Code automation and suggestions.',
        url: 'https://aws.amazon.com/q/developer',
        pricing: 'paid',
        category: 'code-generation'
      },
      {
        id: 'tabnine',
        name: 'Tabnine',
        description: 'AI code completion for multiple languages.',
        url: 'https://tabnine.com',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'aider',
        name: 'Aider',
        description: 'Coding assistant with Git integration.',
        url: 'https://aider.chat',
        pricing: 'free',
        category: 'code-generation'
      },
      {
        id: 'replit-ghostwriter',
        name: 'Replit Ghostwriter',
        description: 'AI coding help in Replit IDE.',
        url: 'https://replit.com',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'codeium',
        name: 'Codeium',
        description: 'Free AI code completion tool.',
        url: 'https://codeium.com',
        pricing: 'free',
        category: 'code-generation'
      },
      {
        id: 'cursor',
        name: 'Cursor',
        description: 'AI-powered code editor.',
        url: 'https://cursor.sh',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'sourcegraph-cody',
        name: 'Sourcegraph Cody',
        description: 'AI for code understanding and generation.',
        url: 'https://sourcegraph.com/cody',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'jetbrains-ai',
        name: 'JetBrains AI Assistant',
        description: 'AI coding in JetBrains IDEs.',
        url: 'https://jetbrains.com/ai',
        pricing: 'paid',
        category: 'code-generation'
      },
      {
        id: 'blackbox-ai',
        name: 'Blackbox AI',
        description: 'AI for code snippets and solutions.',
        url: 'https://blackbox.ai',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'codium-ai',
        name: 'CodiumAI',
        description: 'AI for test case generation and coding.',
        url: 'https://codium.ai',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'phind',
        name: 'Phind',
        description: 'AI search and coding assistant.',
        url: 'https://phind.com',
        pricing: 'free',
        category: 'code-generation'
      },
      {
        id: 'deepcode',
        name: 'DeepCode',
        description: 'AI-powered code review tool.',
        url: 'https://deepcode.ai',
        pricing: 'freemium',
        category: 'code-generation'
      },
      {
        id: 'kite',
        name: 'Kite',
        description: 'AI code completions for Python.',
        url: 'https://kite.com',
        pricing: 'free',
        category: 'code-generation'
      },
      {
        id: 'askcodi',
        name: 'AskCodi',
        description: 'AI coding assistant for developers.',
        url: 'https://askcodi.com',
        pricing: 'freemium',
        category: 'code-generation'
      }
    ]
  },
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'AI Coding for Websites',
    icon: Palette,
    tools: [
      {
        id: 'wix-adi',
        name: 'Wix ADI',
        description: 'AI builds custom websites from prompts.',
        url: 'https://wix.com',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'framer-ai',
        name: 'Framer AI',
        description: 'AI generates web designs and code.',
        url: 'https://framer.com',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'uizard',
        name: 'Uizard',
        description: 'AI converts sketches to web designs.',
        url: 'https://uizard.io',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'teleporthq',
        name: 'TeleportHQ',
        description: 'AI-assisted web design and coding.',
        url: 'https://teleporthq.io',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'bubble',
        name: 'Bubble',
        description: 'No-code platform with AI features for web apps.',
        url: 'https://bubble.io',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'webflow-ai',
        name: 'Webflow AI',
        description: 'AI enhances web design workflows.',
        url: 'https://webflow.com',
        pricing: 'paid',
        category: 'web-design'
      },
      {
        id: 'editor-x',
        name: 'Editor X',
        description: 'AI-powered responsive web design.',
        url: 'https://editorx.com',
        pricing: 'paid',
        category: 'web-design'
      },
      {
        id: 'zyro-ai',
        name: 'Zyro AI',
        description: 'AI creates websites and content.',
        url: 'https://zyro.com',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: '10web',
        name: '10Web',
        description: 'AI builds WordPress sites automatically.',
        url: 'https://10web.io',
        pricing: 'paid',
        category: 'web-design'
      },
      {
        id: 'durable',
        name: 'Durable',
        description: 'AI generates business websites in seconds.',
        url: 'https://durable.co',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'pineapple',
        name: 'Pineapple',
        description: 'AI web builder for simple sites.',
        url: 'https://pineapple.io',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'codedesign',
        name: 'CodeDesign',
        description: 'AI designs and deploys websites.',
        url: 'https://codedesign.ai',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'b12',
        name: 'B12',
        description: 'AI-powered web design for professionals.',
        url: 'https://b12.io',
        pricing: 'paid',
        category: 'web-design'
      },
      {
        id: 'fronty',
        name: 'Fronty',
        description: 'AI converts images to HTML/CSS code.',
        url: 'https://fronty.com',
        pricing: 'freemium',
        category: 'web-design'
      },
      {
        id: 'anima',
        name: 'Anima',
        description: 'AI turns designs into web code.',
        url: 'https://animaapp.com',
        pricing: 'freemium',
        category: 'web-design'
      }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Robotic Process Automation (RPA)',
    icon: Robot,
    tools: [
      {
        id: 'uipath',
        name: 'UiPath',
        description: 'Leading RPA for business automation.',
        url: 'https://uipath.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'automation-anywhere',
        name: 'Automation Anywhere',
        description: 'RPA with AI and analytics.',
        url: 'https://automationanywhere.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'blue-prism',
        name: 'Blue Prism',
        description: 'Enterprise-grade RPA solution.',
        url: 'https://blueprism.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'workfusion',
        name: 'WorkFusion',
        description: 'AI-driven RPA for document processing.',
        url: 'https://workfusion.com',
        pricing: 'freemium',
        category: 'robotics'
      },
      {
        id: 'kofax-rpa',
        name: 'Kofax RPA',
        description: 'Automates repetitive tasks with AI.',
        url: 'https://kofax.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'power-automate',
        name: 'Microsoft Power Automate',
        description: 'RPA for workflow automation.',
        url: 'https://powerautomate.microsoft.com',
        pricing: 'freemium',
        category: 'robotics'
      },
      {
        id: 'nice-rpa',
        name: 'NICE RPA',
        description: 'AI-enhanced robotic automation.',
        url: 'https://nice.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'antworks',
        name: 'AntWorks',
        description: 'Cognitive RPA for data processing.',
        url: 'https://ant.works',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'edgeverve',
        name: 'EdgeVerve AssistEdge',
        description: 'RPA for enterprise efficiency.',
        url: 'https://edgeverve.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'kryon',
        name: 'Kryon',
        description: 'RPA with process discovery features.',
        url: 'https://kryonsystems.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'softomotive',
        name: 'Softomotive',
        description: 'RPA for desktop and web automation.',
        url: 'https://softomotive.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'electroneek',
        name: 'ElectroNeek',
        description: 'RPA for small businesses with AI.',
        url: 'https://electroneek.com',
        pricing: 'freemium',
        category: 'robotics'
      },
      {
        id: 'robocorp',
        name: 'Robocorp',
        description: 'Open-source RPA platform.',
        url: 'https://robocorp.com',
        pricing: 'freemium',
        category: 'robotics'
      },
      {
        id: 'symphony-ai',
        name: 'SymphonyAI',
        description: 'AI-powered RPA for industries.',
        url: 'https://symphonyai.com',
        pricing: 'paid',
        category: 'robotics'
      },
      {
        id: 'laiye',
        name: 'Laiye',
        description: 'RPA with conversational AI features.',
        url: 'https://laiye.com',
        pricing: 'paid',
        category: 'robotics'
      }
    ]
  },
  {
    id: 'audio-music',
    name: 'Audio & Music',
    description: 'AI Music and Audio Tools',
    icon: Music,
    tools: [
      {
        id: 'google-magenta',
        name: 'Google Magenta',
        description: 'Open-source AI for music creation.',
        url: 'https://magenta.ai',
        pricing: 'free',
        category: 'audio-music'
      },
      {
        id: 'landr',
        name: 'LANDR',
        description: 'AI mastering for music tracks.',
        url: 'https://landr.com',
        pricing: 'paid',
        category: 'audio-music'
      },
      {
        id: 'amper-music',
        name: 'Amper Music',
        description: 'AI composes custom music tracks.',
        url: 'https://ampermusic.com',
        pricing: 'paid',
        category: 'audio-music'
      },
      {
        id: 'aiva',
        name: 'AIVA',
        description: 'AI music composer for various genres.',
        url: 'https://aiva.ai',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'boomy',
        name: 'Boomy',
        description: 'AI generates original songs instantly.',
        url: 'https://boomy.com',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'soundraw',
        name: 'Soundraw',
        description: 'AI music generator for creators.',
        url: 'https://soundraw.io',
        pricing: 'paid',
        category: 'audio-music'
      },
      {
        id: 'ecrett-music',
        name: 'Ecrett Music',
        description: 'AI music for videos and games.',
        url: 'https://ecrettmusic.com',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'voicemod',
        name: 'Voicemod AI Voices',
        description: 'AI-generated voices for audio.',
        url: 'https://voicemod.net',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'descript',
        name: 'Descript',
        description: 'AI audio editing and transcription.',
        url: 'https://descript.com',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'krisp',
        name: 'Krisp',
        description: 'AI noise cancellation for audio.',
        url: 'https://krisp.ai',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'adobe-audition',
        name: 'Adobe Audition AI',
        description: 'AI-enhanced audio editing.',
        url: 'https://adobe.com/products/audition',
        pricing: 'paid',
        category: 'audio-music'
      },
      {
        id: 'mubert',
        name: 'Mubert',
        description: 'AI generates royalty-free music.',
        url: 'https://mubert.com',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'soundful',
        name: 'Soundful',
        description: 'AI music creation for content creators.',
        url: 'https://soundful.com',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'lalal-ai',
        name: 'Lalal.ai',
        description: 'AI separates vocals and instruments.',
        url: 'https://lalal.ai',
        pricing: 'freemium',
        category: 'audio-music'
      },
      {
        id: 'moises',
        name: 'Moises',
        description: 'AI audio separation and editing.',
        url: 'https://moises.com',
        pricing: 'freemium',
        category: 'audio-music'
      }
    ]
  },
  {
    id: 'video-generation',
    name: 'Video Generation',
    description: 'AI Video Creation and Editing',
    icon: Video,
    tools: [
      {
        id: 'synthesia',
        name: 'Synthesia',
        description: 'AI videos with avatars from text.',
        url: 'https://synthesia.io',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'runwayml-video',
        name: 'RunwayML',
        description: 'AI for video editing and generation.',
        url: 'https://runwayml.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'filmora',
        name: 'Filmora',
        description: 'AI-enhanced video editing tool.',
        url: 'https://filmora.wondershare.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'descript-video',
        name: 'Descript',
        description: 'AI video editing with transcription.',
        url: 'https://descript.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'pictory',
        name: 'Pictory',
        description: 'AI turns text into videos.',
        url: 'https://pictory.ai',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'lumen5',
        name: 'Lumen5',
        description: 'AI video maker for marketing.',
        url: 'https://lumen5.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'invideo',
        name: 'Invideo AI',
        description: 'AI video creation from prompts.',
        url: 'https://invideo.io',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'kapwing',
        name: 'Kapwing',
        description: 'AI-assisted video editing online.',
        url: 'https://kapwing.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'veed',
        name: 'Veed.io',
        description: 'AI video editing and subtitles.',
        url: 'https://veed.io',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'rephrase',
        name: 'Rephrase.ai',
        description: 'AI generates human-like video avatars.',
        url: 'https://rephrase.ai',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'flexclip',
        name: 'FlexClip',
        description: 'AI video maker for beginners.',
        url: 'https://flexclip.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'deepbrain',
        name: 'DeepBrain AI',
        description: 'AI video with virtual humans.',
        url: 'https://deepbrain.io',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'colossyan',
        name: 'Colossyan',
        description: 'AI video creation for training.',
        url: 'https://colossyan.com',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'premiere-pro',
        name: 'Adobe Premiere Pro AI',
        description: 'AI features for video editing.',
        url: 'https://adobe.com/products/premiere',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'magisto',
        name: 'Magisto',
        description: 'AI video creation for businesses.',
        url: 'https://magisto.com',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'firetheai',
        name: 'FireTheAI',
        description: 'AI-driven video creation or editing tool.',
        url: 'https://firetheai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'video-generation'
      },
      {
        id: 'whattheai',
        name: 'WhatTheAI',
        description: 'AI tool for video analysis or creation.',
        url: 'https://whattheai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'video-generation'
      },
      {
        id: 'nanointern-ai',
        name: 'NanoIntern AI',
        description: 'AI for video production or automation.',
        url: 'https://nanointern.ai', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'video-generation'
      },
      {
        id: 'genmo-ai',
        name: 'Genmo AI',
        description: 'AI for generating videos and animations from text.',
        url: 'https://www.genmo.ai',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'futuretheai',
        name: 'FutureTheAI',
        description: 'AI tool for futuristic video effects or generation.',
        url: 'https://futuretheai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'video-generation'
      },
      {
        id: 'streettheai',
        name: 'StreetTheAI',
        description: 'AI for video creation with urban or street-style content.',
        url: 'https://streettheai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'video-generation'
      },
      {
        id: 'beautiful-ai',
        name: 'Beautiful AI',
        description: 'AI for creating video-like slideshows and presentations.',
        url: 'https://www.beautiful.ai',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'heygen',
        name: 'HeyGen',
        description: 'AI for creating videos with AI-generated avatars.',
        url: 'https://www.heygen.com',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'videocaptions',
        name: 'VideoCaptions',
        description: 'AI tool for generating captions or subtitles for videos.',
        url: 'https://videocaptions.com', // Placeholder, verify the actual URL
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'capcut',
        name: 'CapCut',
        description: 'Video editing app with AI features for social media content.',
        url: 'https://www.capcut.com',
        pricing: 'freemium',
        category: 'video-generation'
      },
      {
        id: 'audiate',
        name: 'Audiate',
        description: 'AI-powered audio editing for video projects.',
        url: 'https://www.techsmith.com/audiate.html',
        pricing: 'paid',
        category: 'video-generation'
      },
      {
        id: 'splice',
        name: 'Splice',
        description: 'Mobile video editing app with AI features.',
        url: 'https://spliceapp.com',
        pricing: 'freemium',
        category: 'video-generation'
      }
    ]
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'AI-Powered Data Analytics',
    icon: Database,
    tools: [
      {
        id: 'tableau',
        name: 'Tableau',
        description: 'AI-driven data visualization tool.',
        url: 'https://tableau.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'power-bi',
        name: 'Power BI',
        description: "Microsoft's AI analytics platform.",
        url: 'https://powerbi.microsoft.com',
        pricing: 'freemium',
        category: 'data-analysis'
      },
      {
        id: 'sas',
        name: 'SAS',
        description: 'Comprehensive AI analytics software.',
        url: 'https://sas.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'qlik-sense',
        name: 'Qlik Sense',
        description: 'AI-powered data insights platform.',
        url: 'https://qlik.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'looker',
        name: 'Looker',
        description: "Google's AI data analytics tool.",
        url: 'https://looker.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'rapidminer-analytics',
        name: 'RapidMiner',
        description: 'AI data science and analytics platform.',
        url: 'https://rapidminer.com',
        pricing: 'freemium',
        category: 'data-analysis'
      },
      {
        id: 'knime-analytics',
        name: 'KNIME',
        description: 'Open-source AI analytics platform.',
        url: 'https://knime.com',
        pricing: 'freemium',
        category: 'data-analysis'
      },
      {
        id: 'dataiku',
        name: 'Dataiku',
        description: 'Collaborative AI data science tool.',
        url: 'https://dataiku.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'alteryx',
        name: 'Alteryx',
        description: 'AI analytics automation platform.',
        url: 'https://alteryx.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'sisense',
        name: 'Sisense',
        description: 'AI-driven business intelligence tool.',
        url: 'https://sisense.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'zoho-analytics',
        name: 'Zoho Analytics',
        description: 'AI analytics for small businesses.',
        url: 'https://zoho.com/analytics',
        pricing: 'freemium',
        category: 'data-analysis'
      },
      {
        id: 'thoughtspot',
        name: 'ThoughtSpot',
        description: 'AI search-driven analytics.',
        url: 'https://thoughtspot.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'domo',
        name: 'Domo',
        description: 'AI business intelligence platform.',
        url: 'https://domo.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'yellowfin',
        name: 'Yellowfin',
        description: 'AI analytics and reporting tool.',
        url: 'https://yellowfinbi.com',
        pricing: 'paid',
        category: 'data-analysis'
      },
      {
        id: 'metabase',
        name: 'Metabase',
        description: 'Open-source AI analytics dashboard.',
        url: 'https://metabase.com',
        pricing: 'freemium',
        category: 'data-analysis'
      }
    ]
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Tools to Enhance Efficiency and Organization',
    icon: Briefcase,
    tools: [
      {
        id: 'taskque',
        name: 'TaskQue',
        description: 'AI-powered task management for prioritizing to-do lists.',
        url: 'https://taskque.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'supportcandy',
        name: 'SupportCandy',
        description: 'AI-enhanced helpdesk plugin for WordPress.',
        url: 'https://supportcandy.net',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'chatkpi',
        name: 'ChatKPI',
        description: 'AI tool for conversational business analytics.',
        url: 'https://chatkpi.com', // Placeholder, verify the actual URL
        pricing: 'paid',
        category: 'productivity'
      },
      {
        id: 'grammarly',
        name: 'Grammarly',
        description: 'AI writing assistant for grammar and style checks.',
        url: 'https://www.grammarly.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'tome-app',
        name: 'Tome app',
        description: 'AI-powered presentation tool for creating slideshows.',
        url: 'https://tome.app',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'ryte',
        name: 'Ryte',
        description: 'AI-driven platform for website optimization and SEO.',
        url: 'https://en.ryte.com',
        pricing: 'paid',
        category: 'productivity'
      },
      {
        id: 'copy-ai',
        name: 'Copy.ai',
        description: 'AI content generation for marketing and emails.',
        url: 'https://www.copy.ai',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'wordtune',
        name: 'Wordtune',
        description: 'AI writing assistant for rephrasing and improving clarity.',
        url: 'https://www.wordtune.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'simplified',
        name: 'Simplified',
        description: 'All-in-one AI platform for content creation.',
        url: 'https://simplified.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'AI for writing and organizing within Notion.',
        url: 'https://www.notion.so/product/ai',
        pricing: 'paid',
        category: 'productivity'
      },
      {
        id: 'proranktracker',
        name: 'ProRankTracker',
        description: 'AI-powered SEO tool for tracking website rankings.',
        url: 'https://proranktracker.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'chatcream',
        name: 'Chatcream',
        description: 'AI tool for productivity or chat-based task management.',
        url: 'https://chatcream.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'productivity'
      },
      {
        id: 'quillbot',
        name: 'QuillBot',
        description: 'AI paraphrasing and summarizing tool.',
        url: 'https://quillbot.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'deepl',
        name: 'DeepL',
        description: 'AI translation tool for high-quality translations.',
        url: 'https://www.deepl.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'writesonic',
        name: 'Writesonic',
        description: 'AI writing tool for blogs, ads, and emails.',
        url: 'https://writesonic.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'small-seo-tools-ai',
        name: 'Small SEO Tools AI',
        description: 'AI-powered tools for SEO and content optimization.',
        url: 'https://smallseotools.com',
        pricing: 'freemium',
        category: 'productivity'
      },
      {
        id: 'contentstudio',
        name: 'ContentStudio',
        description: 'AI-powered content marketing and social media management.',
        url: 'https://contentstudio.io',
        pricing: 'paid',
        category: 'productivity'
      },
      {
        id: 'hypotenuse-ai',
        name: 'Hypotenuse AI',
        description: 'AI content generation for blogs and product descriptions.',
        url: 'https://www.hypotenuse.ai',
        pricing: 'paid',
        category: 'productivity'
      }
    ]
  },
  {
    id: 'writing',
    name: 'Writing',
    description: 'AI Tools for Writing and Editing',
    icon: FileText,
    tools: [
      {
        id: 'anyword',
        name: 'Anyword',
        description: 'AI copywriting tool for performance-driven content.',
        url: 'https://anyword.com',
        pricing: 'paid',
        category: 'writing'
      },
      {
        id: 'canirank',
        name: 'CanIRank',
        description: 'AI SEO tool for keyword research and content optimization.',
        url: 'https://www.canirank.com',
        pricing: 'freemium',
        category: 'writing'
      },
      {
        id: 'keywordtool',
        name: 'KeywordTool',
        description: 'AI for generating keyword ideas for SEO.',
        url: 'https://keywordtool.io',
        pricing: 'freemium',
        category: 'writing'
      },
      {
        id: 'jasper',
        name: 'Jasper',
        description: 'AI writing assistant for blogs and marketing copy.',
        url: 'https://www.jasper.ai',
        pricing: 'paid',
        category: 'writing'
      },
      {
        id: 'ink',
        name: 'INK',
        description: 'AI writing and SEO tool for content optimization.',
        url: 'https://inkforall.com',
        pricing: 'freemium',
        category: 'writing'
      },
      {
        id: 'scout',
        name: 'Scout',
        description: 'AI tool for content research and competitive analysis.',
        url: 'https://scoutapp.ai', // Placeholder, verify the actual URL
        pricing: 'paid',
        category: 'writing'
      },
      {
        id: 'storychief',
        name: 'StoryChief',
        description: 'AI-powered content marketing and distribution platform.',
        url: 'https://www.storychief.io',
        pricing: 'paid',
        category: 'writing'
      },
      {
        id: 'writesparkle',
        name: 'Writesparkle',
        description: 'AI writing tool for creative content generation.',
        url: 'https://writesparkle.ai', // Placeholder, verify the actual URL
        pricing: 'freemium',
        category: 'writing'
      },
      {
        id: 'magical-ai',
        name: 'Magical AI',
        description: 'AI for automating writing tasks like emails.',
        url: 'https://www.getmagical.com',
        pricing: 'freemium',
        category: 'writing'
      },
      {
        id: 'hints-ai',
        name: 'HINTS AI',
        description: 'AI tool for writing assistance or content ideation.',
        url: 'https://hints.ai', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'writing'
      },
      {
        id: 'quill',
        name: 'Quill',
        description: 'AI for generating narrative reports from data.',
        url: 'https://narrativescience.com', // Placeholder, verify the actual URL
        pricing: 'paid',
        category: 'writing'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'AI Tools for Marketing Campaigns and Analytics',
    icon: Briefcase,
    tools: [
      {
        id: 'sendinblue',
        name: 'Sendinblue',
        description: 'AI-powered platform for email and SMS marketing.',
        url: 'https://www.sendinblue.com',
        pricing: 'freemium',
        category: 'marketing'
      },
      {
        id: 'marketing-ai',
        name: 'Marketing AI',
        description: 'AI tool for automating marketing tasks.',
        url: 'https://marketingai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'marketing'
      },
      {
        id: 'cresta',
        name: 'Cresta',
        description: 'AI for sales and customer service in marketing.',
        url: 'https://cresta.com',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'quickchat',
        name: 'Quickchat',
        description: 'AI chatbot for marketing and lead generation.',
        url: 'https://quickchat.ai',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'ferret',
        name: 'Ferret',
        description: 'AI tool for marketing analytics or competitor research.',
        url: 'https://ferret.ai', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'marketing'
      },
      {
        id: 'kermbly',
        name: 'Kermbly',
        description: 'AI for marketing content or campaign management.',
        url: 'https://kermbly.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'marketing'
      },
      {
        id: 'scale',
        name: 'Scale',
        description: 'AI for data annotation, used in marketing for model training.',
        url: 'https://scale.com',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'reclaim',
        name: 'Reclaim',
        description: 'AI scheduling tool for marketing teams.',
        url: 'https://reclaim.ai',
        pricing: 'freemium',
        category: 'marketing'
      },
      {
        id: 'echowin',
        name: 'Echowin',
        description: 'AI-powered call automation for marketing leads.',
        url: 'https://echowin.ai',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'regie-ai',
        name: 'Regie.ai',
        description: 'AI for personalized email outreach in marketing.',
        url: 'https://www.regie.ai',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'adobe-sensei',
        name: 'Adobe Sensei',
        description: 'AI framework for marketing analytics and personalization.',
        url: 'https://www.adobe.com/sensei.html',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'summary',
        name: 'Summary',
        description: 'AI tool for summarizing marketing content or reports.',
        url: 'https://summary.ai', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'marketing'
      },
      {
        id: 'ellenai',
        name: 'EllenAI',
        description: 'AI for marketing content or campaign automation.',
        url: 'https://ellenai.com', // Placeholder, verify the actual URL
        pricing: 'unknown',
        category: 'marketing'
      },
      {
        id: 'robin',
        name: 'Robin',
        description: 'AI for contract analysis in marketing compliance.',
        url: 'https://www.robinai.co.uk',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'quicklines',
        name: 'Quicklines',
        description: 'AI for generating personalized email lines for marketing.',
        url: 'https://quicklines.ai',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'unspam-email',
        name: 'Unspam.email',
        description: 'AI for email deliverability testing in marketing.',
        url: 'https://unspam.email',
        pricing: 'freemium',
        category: 'marketing'
      },
      {
        id: 'smartwriter',
        name: 'Smartwriter',
        description: 'AI for personalized cold emails and LinkedIn messages.',
        url: 'https://smartwriter.ai',
        pricing: 'paid',
        category: 'marketing'
      },
      {
        id: 'convertkit',
        name: 'ConvertKit',
        description: 'Email marketing platform with AI automation.',
        url: 'https://convertkit.com',
        pricing: 'freemium',
        category: 'marketing'
      }
    ]
  },
  {
    id: 'text-to-speech',
    name: 'Text-to-Speech & Speech-to-Text',
    description: 'AI Tools for Voice Generation and Transcription',
    icon: Mic,
    tools: [
      {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        description: 'AI for generating realistic text-to-speech voices.',
        url: 'https://elevenlabs.io',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'whisper',
        name: 'Whisper',
        description: 'Open-source speech-to-text model by OpenAI.',
        url: 'https://openai.com/research/whisper',
        pricing: 'free',
        category: 'text-to-speech'
      },
      {
        id: 'murphy',
        name: 'Murphy',
        description: 'AI for text-to-speech with natural voice synthesis.',
        url: 'https://murphy.ai',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'speechify',
        name: 'Speechify',
        description: 'AI text-to-speech for reading documents aloud.',
        url: 'https://speechify.com',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'wellsaidlabs',
        name: 'WellSaid Labs',
        description: 'AI for creating studio-quality voiceovers.',
        url: 'https://wellsaidlabs.com',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'resemble-ai',
        name: 'Resemble AI',
        description: 'AI for custom voice cloning and text-to-speech.',
        url: 'https://resemble.ai',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'voicemod-tts',
        name: 'Voicemod TTS',
        description: 'AI text-to-speech for real-time voice modulation.',
        url: 'https://voicemod.net',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'play-ht',
        name: 'Play.ht',
        description: 'AI text-to-speech for podcasts and audiobooks.',
        url: 'https://play.ht',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'synthesys',
        name: 'Synthesys',
        description: 'AI for text-to-speech and voiceover generation.',
        url: 'https://synthesys.io',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'otter-ai',
        name: 'Otter.ai',
        description: 'AI for speech-to-text transcription and note-taking.',
        url: 'https://otter.ai',
        pricing: 'freemium',
        category: 'text-to-speech'
      },
      {
        id: 'rev-ai',
        name: 'Rev AI',
        description: 'AI for accurate speech-to-text transcription.',
        url: 'https://rev.ai',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'sonix',
        name: 'Sonix',
        description: 'AI for automated transcription and subtitling.',
        url: 'https://sonix.ai',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'aws-polly',
        name: 'Amazon Polly',
        description: 'AWS text-to-speech service with lifelike voices.',
        url: 'https://aws.amazon.com/polly',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'google-tts',
        name: 'Google Text-to-Speech',
        description: 'AI for converting text to natural-sounding speech.',
        url: 'https://cloud.google.com/text-to-speech',
        pricing: 'paid',
        category: 'text-to-speech'
      },
      {
        id: 'microsoft-tts',
        name: 'Microsoft Azure Text-to-Speech',
        description: 'AI for text-to-speech with customizable voices.',
        url: 'https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech',
        pricing: 'paid',
        category: 'text-to-speech'
      }
    ]
  },
  {
    id: 'ai-for-gaming',
    name: 'AI for Gaming',
    description: 'AI Tools for Game Development and NPC Behavior',
    icon: Gamepad2,
    tools: [
      {
        id: 'scenario',
        name: 'Scenario',
        description: 'AI for generating game assets and art.',
        url: 'https://scenario.com',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'inworld-ai',
        name: 'Inworld AI',
        description: 'AI for creating intelligent NPCs with natural dialogue.',
        url: 'https://inworld.ai',
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'leonardo-ai-gaming',
        name: 'Leonardo AI',
        description: 'AI for generating game art and assets.',
        url: 'https://leonardo.ai',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'rosebud-ai',
        name: 'Rosebud AI',
        description: 'AI for generating game characters and assets.',
        url: 'https://rosebud.ai',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'promethean-ai',
        name: 'Promethean AI',
        description: 'AI for automating 3D environment creation in games.',
        url: 'https://prometheanai.com',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'ludo-ai',
        name: 'Ludo.ai',
        description: 'AI for game design ideation and prototyping.',
        url: 'https://ludo.ai',
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'charisma-ai',
        name: 'Charisma.ai',
        description: 'AI for interactive storytelling and NPC dialogue.',
        url: 'https://charisma.ai',
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'ai-dungeon',
        name: 'AI Dungeon',
        description: 'AI for creating interactive text-based game adventures.',
        url: 'https://aidungeon.io',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'playtestcloud-ai',
        name: 'PlaytestCloud AI',
        description: 'AI for game testing and player behavior analysis.',
        url: 'https://playtestcloud.com',
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'modl-ai',
        name: 'Modl.ai',
        description: 'AI for game testing and bot creation.',
        url: 'https://modl.ai',
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'krikey-ai',
        name: 'Krikey AI',
        description: 'AI for 3D animation and AR game development.',
        url: 'https://krikey.ai',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'gameforge-ai',
        name: 'Gameforge AI',
        description: 'AI for procedural content generation in games.',
        url: 'https://gameforge.ai', // Placeholder, verify the actual URL
        pricing: 'paid',
        category: 'ai-for-gaming'
      },
      {
        id: 'unity-ai',
        name: 'Unity AI',
        description: 'AI tools for game development in Unity.',
        url: 'https://unity.com',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'unreal-engine-ai',
        name: 'Unreal Engine AI',
        description: 'AI features for NPC behavior in Unreal Engine.',
        url: 'https://unrealengine.com',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      },
      {
        id: 'nvidia-gameworks',
        name: 'NVIDIA GameWorks AI',
        description: 'AI for real-time graphics and physics in games.',
        url: 'https://developer.nvidia.com/gameworks',
        pricing: 'freemium',
        category: 'ai-for-gaming'
      }
    ]
  }
];