

# from django.urls import path
# from django.contrib import admin
# from form import views
# from form.views import form_submission_view

# urlpatterns = [
#     path('form', views.formApi, name='form'),
#      path('form/<int:id>', views.formApi, name='form-details'),
#      path('admin/', admin.site.urls),
#     path('form/', form_submission_view, name='form_submission'),
# ]
from django.urls import path
from django.contrib import admin
from form import views


urlpatterns = [
    path('', views.home, name='home'),
    path('formApi/', views.formApi, name='form-api'),  # Changed the path to 'formApi'
    path('formApi/<int:id>/', views.formApi, name='form-details'),
    path('admin/', admin.site.urls),
    path('form/', views.form_submission_view, name='form_submission'),  # This handles form submission
]
