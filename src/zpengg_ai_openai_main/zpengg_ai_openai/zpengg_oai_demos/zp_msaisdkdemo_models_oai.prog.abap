*&---------------------------------------------------------------------*
*& Report ZP_MSAISDKDEMO_MODELS_OAI
*&---------------------------------------------------------------------*
*&
*&---------------------------------------------------------------------*
REPORT zp_msaisdkdemo_models_oai.

INCLUDE zp_msaisdkdemo_params_top_oai.  "Common Input Parameters (AI End Point, Version, Key)
INCLUDE zp_msaisdkdemo_common.      "Common Data Declarations (SDK Instance Object, status Code, Status Reason, Return JSON String, Error )

DATA:
  model_list TYPE zif_peng_azoai_sdk_types=>ty_model_list,  "ABAP Type for List of Models
  model_get  TYPE zif_peng_azoai_sdk_types=>ty_model_get.   "ABAP Type for A single Model information


START-OF-SELECTION.

  TRY.
* Create an instance of MS AI SDK for SAP.
      sdk_instance = zcl_peng_azoai_sdk_factory=>get_instance( )->get_sdk(
                                                            api_version = p_ver
                                                            api_base    = p_url
                                                            api_type    = zif_peng_azoai_sdk_constants=>c_apitype-openai
                                                            api_key     = p_key
                                                          ).
************************** Get a list of all available Models ******************

* Get a list of all models (Models - List ).
      sdk_instance->model( )->list(
        IMPORTING
          ov_statuscode   = status_code  " Status Code
          ov_statusreason = status_reason " HTTP status description
          ov_json         = returnjson   "JSON String returned from AI Resource
          ov_model        = model_list   "List of Models available ( Type :zif_peng_azoai_sdk_types=>ty_model_list )
          ov_error        = error        "Error if occured, returned from AI Resource (Type : zif_peng_azoai_sdk_types=>ty_error)
      ).
********************************************************************************
      BREAK-POINT.

************************** Get details of a specific Model *********************

* Get the Model information for Text-Davinci-003 (Models - Get).
      sdk_instance->model( )->get(
        EXPORTING
          iv_modelid      = 'text-davinci-003'                " Model ID
            IMPORTING
              ov_statuscode   = status_code                 " HTTP status code
              ov_statusreason = status_reason
              ov_json         = returnjson
              ov_model        = model_get
              ov_error        = error
      ).
********************************************************************************
      BREAK-POINT.

      sdk_instance->deployments( )->list(
*        IMPORTING
*          statuscode   =                  " Status Code.
*          statusreason =                  " Status Description
*          json         =                  " JSON string with information about deployment, or error.
*          deployments  =                  " ABAP ready deployment list
*          error        =                  " ABAP ready error details
      ).
*      CATCH zcx_peng_azoai_sdk_exception. " MSPENG:Azure Open AI ABAP SDK Exception.



    CATCH zcx_peng_azoai_sdk_exception INTO DATA(ex). " MSPENG:Azure Open AI ABAP SDK Exception
      MESSAGE ex TYPE 'I'.
  ENDTRY.
