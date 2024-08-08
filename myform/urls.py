"""
URL configuration for myform project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# from django.contrib import admin
# from django.urls import path
# from form import views
# from form.views import form_submission_view

# urlpatterns = [
#     path('form', views.formApi, name='form'),
#     path('form/<int:id>', views.formApi, name='form-details'),
#     path('submit-form/', form_submission_view, name='submit_form'),
#     path('admin/', admin.site.urls),
# ]


from django.urls import path
from django.contrib import admin
from form import views
from form.views import form_submission_view

urlpatterns = [
    path('form', views.formApi, name='form'),
     path('form/<int:id>', views.formApi, name='form-details'),
     path('admin/', admin.site.urls),
    path('form/', form_submission_view, name='form_submission'),
]

