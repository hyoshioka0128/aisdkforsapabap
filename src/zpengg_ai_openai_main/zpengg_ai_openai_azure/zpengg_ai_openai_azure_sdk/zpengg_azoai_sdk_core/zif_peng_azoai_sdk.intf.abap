INTERFACE zif_peng_azoai_sdk
  PUBLIC .


  "! <p class="shorttext synchronized" lang="en">Initialize the SDK (Internal use Only)</p>
  "! <strong>INTERNAL USE ONLY</strong>
  "! <br/><br/>
  "! Initialize the main SDK object, and return the instance. This method is not intended for public use.
  "! Rather, the SDK instance should always be requested from factory class : <strong>ZCL_PENG_AZOAI_SDK_FACTORY</strong>.
  "! @parameter config                       | <p class="shorttext synchronized" lang="en">MSPENG:Azure Open AI Config Interface</p>
  "! @raising   zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en">MSPENG:Azure Open AI ABAP SDK Exception</p>
  METHODS initialize
    IMPORTING
      !config TYPE REF TO zif_peng_azoai_sdk_config
    RAISING
      zcx_peng_azoai_sdk_exception .
  "! <p class="shorttext synchronized" lang="en">Returns the SDK Model Operation Component</p>
  "! The SDK Model component is used for GPT model interaction. Following are supported:
  "! <ol>
  "!    <li>List All models</li>
  "!    <li>Get details about a specific model </li>
  "! </ol>
  "!
  "! @parameter model |<p>The <strong>Model</strong> object instance.</p>
  "! @raising zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en">MSPENG:Azure Open AI ABAP SDK Exception</p>
  METHODS model
    RETURNING
      VALUE(model) TYPE REF TO zif_peng_azoai_sdk_comp_model
    RAISING
      zcx_peng_azoai_sdk_exception.

  "! <p class="shorttext synchronized" lang="en">Returns an instance of SDK Deployments Component</p>
  "! Deployments are specific instances of a model, that can then be used for text generation. Deployments
  "! can also be based on fine-tuned models - which are specific models based on additional training.
  "! Following operations are supported by SDK (contingent on the version of AI API):
  "! <ol>
  "!    <li>Create new Deployment</li>
  "!    <li>List all Deployments </li>
  "!    <li>Get a specific Deployment Information</li>
  "!    <li>Delete a deployment</li>
  "! </ol>
  "! @parameter deployments | <p class="shorttext synchronized" lang="en">An instance of SDK Deployment Component</p>
  "! @raising zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en"></p>
  METHODS deployments
    RETURNING
      VALUE(deployments) TYPE REF TO zif_peng_azoai_sdk_comp_deploy
    RAISING
      zcx_peng_azoai_sdk_exception.

  "! <p class="shorttext synchronized" lang="en">Returns an instance of SDK Completions Component</p>
  "! Completions are actual interactions with the AI engine. This component is used to ask questions to
  "! AI engine through a deployment, and get the response.
  "! @parameter completions | <p class="shorttext synchronized" lang="en">Completions SDK Component</p>
  "! @raising zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en"></p>
  METHODS completions
    RETURNING
      VALUE(completions) TYPE REF TO zif_peng_azoai_sdk_comp_compl
    RAISING
      zcx_peng_azoai_sdk_exception.

  METHODS chat_completions
    RETURNING
      VALUE(chat_completions) TYPE REF TO zif_peng_ai_sdk_comp_chatcompl
    RAISING
      zcx_peng_azoai_sdk_exception.


  "! <p class="shorttext synchronized" lang="en">Returns an instance of SDK Files Component</p>
  "! Files component is used to interact with training and results files. The uploaded or imported
  "! files can then be used for fine-tuning operation, or as validation data for a fine-tuning.
  "! Following operations are supported by SDK:
  "! <ol>
  "!    <li><strong>Delete</strong> : Deletes the file with the given file-id. Deletion is also allowed if a file was used, e.g., as training file in a fine-tune job. </li>
  "!    <li><strong>Get</strong> : Gets details for a single file specified by the given file-id including status, size, purpose, etc.</li>
  "!    <li><strong>Get Content</strong> : Gets the content of the file specified by the given file-id. Files can be user uploaded content or generated by the service like result metrics of a fine-tune job. </li>
  "!    <li><strong>Import</strong> : Creates a new file entity by importing data from a provided url. Uploaded files can, for example, be used for training or evaluating fine-tuned models.</li>
  "!    <li><strong>List</strong> : Gets a list of all files owned by the Azure OpenAI resource. </li>
  "!    <li><strong>Upload</strong> : Creates a new file entity by uploading data from a SAP Application Server. The file can then be used for training or evaluating fine-tuned models.</li>
  "! </ol>
  "! @parameter files | <p class="shorttext synchronized" lang="en">Files SDK Component</p>
  "! @raising zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en"></p>
  METHODS files
    RETURNING
      VALUE(files) TYPE REF TO zif_peng_azoai_sdk_comp_files
    RAISING
      zcx_peng_azoai_sdk_exception.

  "! <p class="shorttext synchronized" lang="en">Returns an instance of SDK Fine-Tunes component</p>
  "! Fine-tuning is the process of tailoring available models with personal data sets. This customization step
  "! will:
  "! <ul>
  "!    <li>Higher quality results than what you can get just from prompt design</li>
  "!    <li>The ability to train on more examples than can fit into a prompt</li>
  "!    <li>Lower-latency requests</li>
  "! </ul>
  "! <br/>
  "! Following fine-tuning operations are supported by SDK:
  "! <ol>
  "!    <li><strong>Cancel</strong> : Cancels the processing of the fine-tune job specified by the given fine-tune-id.</li>
  "!    <li><strong>Create</strong> : Creates a job that fine-tunes a specified model from a given training file</li>
  "!    <li><strong>Delete</strong> : Deletes the fine-tune job specified by the given fine-tune-id.</li>
  "!    <li><strong>Get</strong> : Gets details for a single fine-tune job specified by the given fine-tune-id.</li>
  "!    <li><strong>Get Events</strong> : Gets the events for the fine-tune job specified by the given fine-tune-id.</li>
  "!    <li><strong>List</strong> : Gets a list of all fine-tune jobs owned by the Azure OpenAI resource </li>
  "! </ol>
  "! @parameter finetunes | <p class="shorttext synchronized" lang="en">FineTunes SDK Component</p>
  "! @raising zcx_peng_azoai_sdk_exception | <p class="shorttext synchronized" lang="en"></p>
  METHODS finetunes
    RETURNING
      VALUE(finetunes) TYPE REF TO zif_peng_azoai_sdk_comp_fintun
    RAISING
      zcx_peng_azoai_sdk_exception.

ENDINTERFACE.
